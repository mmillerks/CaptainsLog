const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean
});

const Logs = mongoose.model('Logs', logssSchema);

module.exports = Logs;
