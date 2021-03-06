let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "_Halo Saya Ramdani Botz š_",
                        "description": "|-----------------------------------------|\n|>>>>> Ramdani Botz <<<<<|\n|-----------------------------------------|",
                        "buttonText": "Klik Disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": "[ć] ALLMENU",
                                        "description": "\nš Menu1",
                                        "rowId": ".allmenu"
                                    },{
                                      "title": "[ć] XP MENU",
                                        "description": "\nš Menu2",
                                        "rowId": ".Ramdani"
                                     },{
                                      "title": "[ć] INVENTORY",
                                        "description": "\nš Menu3",
                                        "rowId": ".inv"           
                                     },{
                                      "title": "[ć] DOMPET",
                                        "description": "\nš Menu4",
                                        "rowId": ".dompet"
                                        },{
                                      "title": "[ć] SEWABOT",
                                        "description": "\nš Menu5",
                                        "rowId": ".sewabot"
                                        },{
                                      "title": "[ć] KERANGMENU",
                                        "description": "\nš Menu6",
                                        "rowId": ".kerangmenu"
                                        },{
                                      "title": "[ć] GAMEMENU",
                                        "description": "\nš Menu7",
                                        "rowId": ".gamemenu"
                                        },{
                                      "title": "[ć] CLAIM (MONEY)",
                                        "description": "\nš Menu8",
                                        "rowId": ".claim"
                                        },{
                                      "title": "[ć] BUY (BUY LIMIT)",
                                        "description": "\nš Menu9",
                                        "rowId": ".buy"
                                        },{
                                      "title": "[ć] LEADERBOARD",
                                        "description": "\nš Menu10",
                                        "rowId": ".lb"
                                        },{
                                      "title": "[ć] SCRIP (SCRIP BOT)",
                                        "description": "\nš Menu11",
                                        "rowId": ".sc"
                                        },{
                                      "title": "[ć] LEVELUP (NAIK LEVEL)",
                                        "description": "\nš Menu12",
                                        "rowId": ".levelup"
                                        },{
                                      "title": "[ć] JUDI (DOSA:V)",
                                        "description": "\nš Menu13",
                                        "rowId": ".judi"
                                        },{
                                      "title": "[ć] CASINO (DOSA:V)",
                                        "description": "\nš Menu14",
                                        "rowId": ".casino"
                                        },{
                                      "title": "[ć] MATH (ASAH OTAK)",
                                        "description": "\nš Menu15",
                                        "rowId": ".math"
                                        },{
                                      "title": "[ć] KUIS (ASAH OTAK)",
                                        "description": "\nš Menu16",
                                        "rowId": ".kuis"
                                        },{
                                      "title": "[ć] MULUNG",
                                        "description": "\nš Menu17",
                                        "rowId": ".mulung"
                                        },{
                                      "title": "[ć] NEBANG",
                                        "description": "\nš Menu18",
                                        "rowId": ".nebang"
                                        },{
                                      "title": "[ć] PREMIUM",
                                        "description": "\nš Menu19",
                                        "rowId": ".premium"
                                        },{
                                      "title": "[ć] KANDANG",
                                        "description": "\nš Menu20",
                                        "rowId": ". kandang"
                                    },{
                                    	
                                        "title": `[ć] JUAL PELIHARAAN`,
                                        "description": "\nš Menu21",
                                        "rowId": ".jual"     
                                        
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler