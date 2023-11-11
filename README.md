# React + TypeScript + Vite Micro Front End

This demo on how we build Micro Front End apps using `Vite Federation`

### How Things Work

So far we split the apps into `hrm-host` as host and `hrm-employee` as remote.
We will specify all the remote in `workspaces` array in root `package.json` file.

Since this is a micro front end you can run the apps separately but if you want to run it from host we need to build and preview the remote first before running the host to make things work.

### How To Run

I make script `yarn serve` to build and preview all the remote and then running the host.

#### NOTE: Make sure you open the host apps that running in PORT 3000
