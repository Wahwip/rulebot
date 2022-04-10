module.exports = {
    name: 'rules',
    description: "Read RULE",
    execute(message, args, Discord) {
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#23a8ff')
		.setTitle('Peraturan Server')
		.setDescription('Selamat datang di server **__BENTO GAMING TEAM__** Mohon untuk membaca peraturan server sebelum melakukan sesuatu di server ini! :smile:')
		.addFields(
			{name: 'Rule 1', value: 'No TOXIC'},
			{name: 'Rule 2', value: 'Sopan Santun'},
			{name: 'Rule 3', value: 'Tidak menyebarkan konten 18+'},
			{name: 'Rule 4', value: 'Tidak membicarakan tentang hal - hal 18+'},
			{name: 'Rule 5', value: '**TOLERANSI**'},
			{name: 'Rule 6', value: 'Saling menghormati SATU sama LAIN'},
			{name: 'Rule 7', value: 'Jangan membicarakan tentang **SARA** (Suku Agama Ras Antargolongan)'},
			{name: 'Rule 8', value: 'No **__SPAM__**'},
			{name: 'Rule 9', value: 'Jangan terlalu sering CAPS LOCK (Maksimal 70%)'},
			{name: 'Rule 10', value: 'Jangan Curang/exploitasi'},
			{name: 'Rule 11', value: 'Jangan **MENYEBARKAN** __Info - info pribadi__'},
			{name: 'Rule 12', value: 'Jangan saling memaksa kehendak orang lain'},
			{name: 'Rule 13', value: 'Jangan menyebarkan info HOAX'},
			{name: 'Rule 14', value: 'Jangan mudah tertipu dengan LINK PALSU, karena link tersebut dapat membuat kekacauan 1 SERVER!'},
			{name: 'Rule 15', value: 'Gunakan bahasa yang **MUDAH DIMENGERTI**'},
			{name: 'Rule 16', value: 'Jangan menggunakan bahasa asing(Kecuali bahasa Inggris dan bahasa Melayu bila perlu)'}
		)
		message.channel.send({embeds: [newEmbed]})	
	}
}