---
title: How I build a password manager?
published: true
slug: password_manager
date: '2024-11-09'
description: This blog focuses on encryption mechanisms for password storage and retrieval, to ensure security
categories:
  - Tech
  - Programming
toc: |
    - [Introduction](#introduction)
    - [Key Wrapping (Encrypt the Encryption Key):](#key-wrapping-encrypt-the-encryption-key)
    - [How It Works:](#how-it-works)
    - [Code sample to demonstrate its working](#code-sample-to-demonstrate-its-working)
---


### Introduction
In today's digital world, security is essential. With so many accounts to manage and passwords to remember, the need for a safe and efficient password manager is greater than ever. While there are various commercial choices available, creating a custom password manager from scratch can give a unique learning experience as well as a fully flexible solution that is personalized to your specific requirements.

This article will walk you through the core encryption logic required to protect a password manager.  
  
We'll skip the API setup and instead focus on the encryption mechanisms for password storage and retrieval, to ensure security. You'll learn how to employ robust encryption methods, secure sensitive data, and comprehend fundamental data protection concepts.

Let's get started.

Let's us first look into how a password manager works
- Account setup
    - user logs in.
    - user creates a master password
- Service setup
    - user creates a service(username, website and password of the account)
    - password of the service is encrypted with master password and the service is stored safely in database
- User wants to access the password for a service
    - initially all services are shown to the user
    - user selects a service to view the password
    - user enters the master password 
    - user is able to view the saved password


It seemed quit simple, but let me throw in a senario.

**What if user needs to change the master password?**

Yes, password of each service would need to be re-encrypted with the new master password. And we are not going to do that!!!

### Key Wrapping (Encrypt the Encryption Key):
**Definition:** Key wrapping is a cryptographic method designed to protect one key by encrypting it with another key, commonly known as the **Key Encryption Key (KEK)**. This approach safeguards critical keys, like the **Data Encryption Key (DEK)**, enabling them to be stored or shared securely without exposing them to potential attackers.

### How It Works:

![[password manager architecture.jpeg]]

**Encryption Process:**

- The user creates a new master password.
- The system generates a DEK (a securely generated, random string of bits).
- The DEK is then encrypted using the master password and stored in the database.
- This stored, encrypted DEK is decrypted using master password then used to encrypt/decrypt individual service passwords.

**Decryption Process:**

- When the user enters their master password, it is used to decrypt the stored, encrypted DEK.
- The decrypted DEK is then used to decrypt the stored service passwords.

**Changing the Master Password:**

- If the user needs to update their master password, the system can simply decrypt the DEK with the old master password, re-encrypt it with the new master password, and store the re-encrypted DEK in the database.

### Code sample to demonstrate its working

```javascript
const crypto = require('crypto');

// AES algorithm configuration
const ALGORITHM = 'aes-256-cbc';
const KEY_LENGTH = 32;
const IV_LENGTH = 16;
const SALT = 'sdjashdf';

function generateDek(key_length) {
    return crypto.randomBytes(key_length);
}

const encryptDekWithMasterPassword = (dek, masterPassword) => {
    const hashedKey = crypto.scryptSync(masterPassword, SALT, 32);
    const cipher = crypto.createCipheriv(ALGORITHM, hashedKey, Buffer.alloc(IV_LENGTH, 0));
    const encryptedDek = Buffer.concat([cipher.update(dek), cipher.final()]).toString('hex');
    return encryptedDek;
};

const decryptDekWithMasterPassword = (encryptedDek, masterPassword) => {
    const hashedKey = crypto.scryptSync(masterPassword, SALT, 32);
    const decipher = crypto.createDecipheriv(ALGORITHM, hashedKey, Buffer.alloc(IV_LENGTH, 0));
    return Buffer.concat([decipher.update(Buffer.from(encryptedDek, 'hex')), decipher.final()]);
};

const encryptPasswordWithDek = (password, dek) => {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, dek, iv);
    const encryptedData = Buffer.concat([cipher.update(password, 'utf8'), cipher.final()]);
    const result = iv.toString('hex') + ":" + encryptedData.toString('hex');
    return result;
};

const decryptPasswordWithDek = (encryptedPassword, dek) => {
    const [iv, data] = encryptedPassword.split(':');
    const decipher = crypto.createDecipheriv(ALGORITHM, dek, Buffer.from(iv, 'hex'));
    return Buffer.concat([decipher.update(Buffer.from(data, 'hex')), decipher.final()]).toString('utf8');
};

const password = "service password";
const masterPassword = "master password";

// GENERATE DEK, ENCRYPT IT, THEN STORE IT IN USER DB

const dek = generateDek(KEY_LENGTH);

const encryptedDek = encryptDekWithMasterPassword(dek, masterPassword);

// store encryptedDek in User DB;

// ENCRYPT SERVICE PASSWORD THEN STORE IT IN SERVICE DB

// to add password, retrieve stored encryptedDek from User DB
// get master password and service password from user

const decryptedDekToEncryptPassword = decryptDekWithMasterPassword(encryptedDek, masterPassword);

const encryptedPassword = encryptPasswordWithDek(password, decryptedDekToEncryptPassword);

// store this encrypted password along with other service informations

console.log("Encrypted password: ", encryptedPassword);

// DECRYPT SERVICE PASSWORD TO REVEAL ORIGINAL PASSWORD

// To view added password, retrieve stored encryptedDek from User DB and retrieve stored encryptedPassword from Service DB
// get master password from user

const decryptedDekToDecryptPassword = decryptDekWithMasterPassword(encryptedDek, masterPassword);

const decryptedPassword = decryptPasswordWithDek(encryptedPassword, decryptedDekToDecryptPassword);

console.log("Decrypted password: ", decryptedPassword);

 
// UPDATE MASTER PASSWORD


const newMasterPassword = "new master password";

// retrieve encryptedDek stored in User DB
// get master password from user

console.log("Old encrypted Dek: ", encryptedDek)
const decryptedDek = decryptDekWithMasterPassword(encryptedDek, masterPassword);

// encrypt the old DEK with the new master password

const newEncryptedDEK = encryptDekWithMasterPassword(decryptedDek, newMasterPassword);
console.log("New encrypted dek: ", newEncryptedDEK)

const newDecryptedDek = decryptDekWithMasterPassword(newEncryptedDEK, newMasterPassword);

const decryptedPassword2 = decryptPasswordWithDek(encryptedPassword, newDecryptedDek);

console.log("Decrypted password with new DEK: ", decryptedPassword2);
```