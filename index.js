const express = require('express');
const {spawn} = require('child_process');
const app = express();

const COMMAND = '/home/jsabac/schemaexpress/generate.sh';

app.use(express.static('./output'));

app.get('/generate', ( req, res ) => {
	const ls = spawn(COMMAND);

	ls.stdout.on('data', (data) => {
	  console.log(`stdout: ${data}`);
	});

	ls.stderr.on('data', (data) => {
	  console.error(`stderr: ${data}`);
	});

	ls.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	});
	res.send('generating schema, this may take a while ,See server logs for more information and you may visit the index page (http://localhost:3005) for the result');
});

app.listen(3005,()=>{
console.log('Running on port 3005')});
