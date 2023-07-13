import DiscordRPC from 'discord-rpc';
import 'dotenv/config';
import presence from '../config.js';

const client_id = process.env.CLIENT_ID!;
const RPC = new DiscordRPC.Client({ transport : 'ipc' });
DiscordRPC.register(client_id);

async function setAcitivity(){
    if(!RPC) return;
    RPC.setActivity(presence.presence.config);
}

RPC.on('ready',async () => {
    console.log('RPC is ready.');
    setAcitivity();
})

RPC.login({ clientId : client_id}).catch(err => console.log(err));

