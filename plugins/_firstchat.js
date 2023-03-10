import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `๐Hai, ${ucapan()}

${user.banned ? '๐ฎMaaf, kamu dibanned oleh bot dan tidak bisa menggunakan bot ini lagi selama kamu dibanned. Silahkan hubungi owner jika ingin diunbanned. Ketik .owner : `๐ฌ Ada yg bisa ${this.user.name} bantu? Ketik .ruthmenu jika ingin menampilkan menu
`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '๐ฎNote: Jangan spam bot nya', [user.banned ? 'OWNER' : 'OWNER', user.banned ? '.owner' : '.owner'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari ๐"
    if (time >= 4) {
        res = "Selamat pagi ๐"
    }
    if (time > 10) {
        res = "Selamat siang โ๏ธ"
    }
    if (time >= 15) {
        res = "Selamat sore ๐"
    }
    if (time >= 18) {
        res = "Selamat malam ๐"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)