exports.wait = () => {
        return `⌛ Processando⌛`
}

exports.timeEnd = () => {
        return `Tempo Esgotado`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *Xp Habilitado*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *Xp Desabilitado*`
}

exports.levelnol = () => {
        return `*SEU LEVEL E * 0 °-°`
}

exports.stick = () => {
        return `[❗] Ocorreu um erro ao transformar a imagem em stiker ❌`
}

exports.Iv = () => {
        return `❌ link invalido ❌`
}

exports.group = () => {
        return `[❗] Esse comando so pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Esse comando so pode ser usado pelo dono do grupo! ❌`
}

exports.ownerB = () => {
        return `[❗] Esse comando so pode ser usado pelo dono do bot - oDalttin ❌`
}

exports.admin = () => {
        return `[❗] Esse comando so pode ser usado pelo admin do grupo ❌`
}

exports.Badmin = () => {
        return `[❗] Esse comando so pode ser usado se o bot for admin do grupo ❌`
}

exports.daftarB = (prefix) => {
        return `──「 NAO REGISTRADO 」──\nE ai !\nVoce nao esta registrado preciso que se registre primeiro.. \n\nComando : ${prefix}register nome|idade \nExemplo: ${prefix}register Sebola|23`
}

exports.daftarD = () => {
        return `*「 JA CADASTRADO 」*\n\n*Voce ja tem registro na base de dados*`
}

exports.wrongf = () => {
        return`*Formato incorreto ou texto em branco*`
}

exports.clears = () => {
        return`*Tudo Limpo ✔️*`
}

exports.pc = () => {
        return`*「 REGISTRADO 」*\n\nSe voce nao recebeu uma mensagem de registro e porque voce nao salvou o numero do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO 」*\n\nvoce esta registrado\n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Numero: wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Data do Registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA: *NAO PERCA O NUMERO DE SERIE, ELE E IMPORTANTE* :v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* comando nao encontrado \ escreva *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe mas ${pushname} nao e script do propietario*`
}

exports.limitend = (pushname) => {
        return`*sorry ${pushname} O limite hoje aumentou*\n*O limite e resetado a cada 12h*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 TEMPO LIMITE 」*
O limite restante e : ${limitCounts}

NOTE : para consseguir mais limite, passe de nivel ou compre limite`
}

exports.satukos = () => {
        return`*Adcionar parametros 1 (ativado) or 0 (desativado)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *Saldo*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Grana* : ${uangkau}`
}
