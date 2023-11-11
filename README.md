# React + TypeScript + Vite Micro Front End

This demo on how we build Micro Front End apps using `Vite Federation`

### How Things Work

So far we split the apps into `hrm-host` as host and `hrm-employee` as remote.
Since this is a micro front end you can run the apps separately but if you want to run it from host we need to build and preview the remote first before running the host to make things work.

### How To Run

- Build the `hrm-employee` using `yarn build:employee`
- Preview the `hrm-employee` using `yarn preview:employee`
- Run the `hrm-host` using `yarn dev:host`

I also make script `yarn serve:dev` to running all command above.

#### NOTE: Make sure you open the host apps that running in PORT 3000
