/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','263714134538'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'IGRIS'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'IGRIS THE BL',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBT+L3nVGkER0KquGkQURLwheNmahwABIvck2NBT/vct+jI9D7uzvW/hkDrnO98lP0FeYIpM1ILpT1ASfIcMdUfWlghMwawOQ0RAHwSQQTAFvYXjTYKAXTdX+3mI4+gMe3P/MlHKQLMaypUH7jSSSrgb7p/Aow/K2kux/4eGgpBKrRjPY/diqZKmH+d2rGvNxBBw4vL2yVUiyZE24lLXnsCj6wgxwXmklTHKEIGpidodxORr8Icmd4tjx7CrXN+4CmxmL1pBmKxVA8fONnt1mJwvLVtdNONr8J1iojYyRZArPTuX7YZZsqttXHGU1XffWkdFc4yg6Ncn+Q0+xVGOAiNAOcOs/TLvlQa3vOBdXqid341saPERlIJ1Zl8yU1fc8WkiTpahzp3S6GvA+ausXctjntDno8hb27Psn7NqMnaq+Lw7pjtlUK1n+9GtOgq/A9+RD68k/4f33jKijTtrTi1x/eys+Gp5mVepECW7JjizdR0OzMSpTpzmfA2+OHT3eF0piKzzuRzvwlWTOxw788ptoXO4DlPNTCxRVLHzCR+ymvwJ5UqQpcUhTJpZ1uoTsxBv2mYZrUbjcU/gF8/7dlgFuufPFt4+HkbqklBEXxTe8nZewTnmaCBgxBaupd2pUiHLe3FNHe+fXjdKUGsEYMo/+oCgCFNGIMNF3tUEoQ9gcLeRTxB7ZRdkam+b9pKXo1iP5Xzs5eMtvdb280mzjqE3LzaYo4kHHf5gPIE+KEnhI0pRoGPKCtJaiFIYIQqmf/3ogxw17E23btqI74MQE8qcvC7TAgYfon78hL5f1Dmz29xXuwMiYMp9lhFjOI9oR2OdQ+LH+I7UGDIKpiFMKfq1ICIoAFNGavQrtGoRdLxfzf1SGes26IPsVQ8cdNkUR5IkjSb8RJKm4+/023PXFZbltxwx0Afp6y2ek4TxkBPGgsRLE3E6/t7VH7/wde0CxCBOKZgC1VrDVDQWmlldE4tbLhUnUtRIAZ/7fPjijfjnzfK6k1NumMFknI641eLStiyJNMMVSlkvlcJnDofnKz56+ocmnamMolcPLvVWtItCN/Krd5ettvJO221zWMxV/3mw3Z0aq74TzVw3riPqEbPd82zLzyqJllKc1Ztb71ALyq10vYA0Rq4qT920AN2xj34fRnv1ZHEQZF/ep0dfvgv7gXb1GqrcysQPBTM42GK6IuUm2J7391k94kxbYOUhvdWDSolFupK8iz8YBdc48Ro/PaeKFr879jUx6ftLhV/N1CnVfYYYvQY/h51+/6ncG+7OX9yj/1uL95fkX9I48+eH7DhYBZsyK7fXYKIeThYlV2OmLpAZzsS9qa/djRG1wQU8Hj/6oEwhCwuSgSmAeUAKHIA+IEXdGdbIw+IPw9SZYShRtOgWTyFlymcIjjhDlMGsBFNekoajsSx3Melu7UhR6pDGYApG0c5ZJeDxN72V3NBRBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'IGRIS THE BL',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
