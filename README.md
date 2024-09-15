# Vue.js + Firebase Emulator Suite

This is a simple Vue 3 project that uses Firebase Emulator Suite for local development.

## Project setup

### Pre-requisites

- Node.js (v20 preferred)
- Visual Studio Code (recommended)

### Getting started

**1. Clone the repository**

**2. Install Firebase Emulator Suite**

Note: You will need Java JDK 11 or heigher to run the Firebase Emulator Suite. https://firebase.google.com/docs/emulator-suite/install_and_configure

In the terminal, run the following command:

```bash
npm install -g firebase-tools
```

**3. Start the Firebase Emulator Suite using the VSCode task**

- Open the command palette (Ctrl + Shift + P)
- Type `Tasks: Run Task`
- Select `Start Firebase Emulator Suite`, press Enter
- After the task is completed, you should see the following output:

```
┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘
```

Note: If you're using a different editor, you can start the Firebase Emulator Suite by running the following command in the terminal (from the `firebase-emulator` folder of the project):

```bash
firebase emulators:start --project demo-app --import ./data --export-on-exit
```

**4. Install the dependencies for the Vue project**

```
npm install
```

Now you can access the Firebase Emulator Suite UI at http://localhost:4000

**5. Finally, Start the Vue project**

```
npm run dev
```

## Important files

- `firebase_emulators`: Firebase Emulator Suite configuration files

  - `data`: Contains import/export data from the firestore emulator. Data is imported when the emulator starts, and exported when the emulator stops.
  - `firebase.json`: Firebase Emulator Suite configuration file
  - `firestore.rules`: Firestore security rules
  - `firestore.indexes.json`: Firestore indexes

- `src/firebase/index.ts`: Firebase configuration file. This connects to the Firebase Emulator Suite when running locally. Note: This file is imported in `main.ts` to initialize Firebase.

## Other important reading

- [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite): Firebase Emulator Suite documentation
- [Vue 3](https://v3.vuejs.org/): Vue 3 documentation
- [Vue Router](https://next.router.vuejs.org/): Vue Router documentation
- [Vuefire](https://vuefire.vuejs.org/): Vuefire documentation (useful for integrating Firebase with Vue)
