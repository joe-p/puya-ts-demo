# Puya-ts demo

## Getting started

### 1. Install npm deps

```shell
npm i
```

### 2. Ensure you have `puya.exe` available on your PATH

> This assumes you have a python installation on your machine, if not see algokit install instructions

```shell
pipx install puya 
```

### 3. Test that puya is available (you may need to restart your shell)

```shell
puya.exe
```

Expect to see

> usage: puya [-h] [--version] [--log-level {notset,debug,info,warning,error,critical}] --options OPTIONS --awst AWST [--source-annotations SOURCE_ANNOTATIONS]  
> puya: error: the following arguments are required: --options, --awst

### 4. Build project

Using the npm script 

```shell
npm run build
```

OR

Invoke using npx

```shell
npx @algorandfoundation/puya-ts build contracts
```

