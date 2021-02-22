const adult = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefixo* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Versão* : 2.0
   ╿
┯┷ *〈 SOBRE 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostra detalhes
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostra usuarios bloq
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Todos usuarios do chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Tempo de Resposta do bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao criador
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Envia Hentai Aleatorio
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Envia foto 🔞 aleatoria (permissao nfsw)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Envia neko 🔞 aleatoria (nessesario nfsw)
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.adult = adult
