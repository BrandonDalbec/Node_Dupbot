module.exports = {
    name: "evalt",
    description: "!evalT <code>",
    usage: "<code>",
    defaultPermission: 4,
    args: 1,
    guildOnly: true,
    execute(Client, msg){
        try{
    		const code = msg.params.join(" ");

    		require('child_process').exec(code, function(error, stdout, stderr){
    			msg.channel.send(">" + Client.clean(code), {code:"xl"});
    			if(error !== null) msg.channel.send(`\`ERROR\` \`\`\`xl\n${Client.clean(error)}\n\`\`\``);
    			let message = stdout;
    			if(message.length > 1700){
    				message = Client.splitter(message, 1700);
    				while(message.length > 0){
    					msg.channel.send(Client.clean(message.shift()), {code: "xl"});
    				}
    			}else {
    				msg.channel.send(Client.clean(message), {code: "xl"});
    			}
    		});
    	} catch(err){
    		msg.channel.send(code, {code:"xl"});
    		msg.channel.send(`\`ERROR\` \`\`\`xl\n${Client.clean(err)}\n\`\`\``);
    	}
    	return false;
    }
};