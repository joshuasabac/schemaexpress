# schemaexpress

### Install nodejs

```bash
~$ sudo apt install nodejs
```

### Install npm

```bash
~$ sudo apt install npm
```

### Setup Project

1. Under `generate.sh` file , modify docker parameters based on your local environment

```

--network : the docker network where the db schema is located
-v : the schemaspy generated output location in your local directory
-t : db driver
-s : db schema
-db : db name
-host : db image container name
-u : db user
-p : db password

```

2. Under `index.js` file, modify the command constant specifying the location of the shell script


3. initialise npm to project directory
```bash
~$ npm init
```

4. install express
```bash
~$ npm install express
```


5. Give permission to write output from schemaspy
```bash
~$ sudo chmod -R 777 output
~$ sudo chmod -R 777 generate.sh
```

### Starting the app
```bash
~$ node index.js
```

### Generating the schema
```
http://localhost:3005/generate

```

this will take a while depending on complexity of the database, See server logs for more info.


### View the result

```
http://localhost:3005
```

