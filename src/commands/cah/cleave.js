module.exports = {
    name: "cleave",
    defaultPermission: 1,
    args: 0,
    guildOnly: true,
    execute (Client, msg) {
        Client.cah.leave(Client, msg);
    }
};
