const jsonfile = require('jsonfile');
const moment = require('moment');
const simplegit = require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(364, 'd')format();

const data = {
	date: DATE
}

jsonfile.writeFile(FILE_PATH, data)

// git commit --date = "Mon 28th"
simplegit().add([FILE_PATH]).commit(DATE, {'--date': DATE }).push()
