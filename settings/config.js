const conf = {
    nome: 'devpolice-core',
    prefix: '/',
    versao: '1.0',
    descricao: 'Robo que faz administração de uma comunidade no whatsapp',
    criador: {
        nome: 'Guilherme',
        numero: '5522981274455'
    },
    comunidade: {
        nome: 'Developer`s',
        data_de_criacao: '04/06/2020',
        descricao: '',
        urls: [
            {
                title: 'Site',
                link: 'https://devsofc.github.io/',
                descricao: ''
            },
            {
                title: 'Site - Grupos',
                link: 'https://devsofc.github.io/grupos',
                descricao: ''
            },
            {
                title: 'Site - Parceiros',
                link: 'https://devsofc.github.io/parceiros',
                descricao: ''
            },
            {
                title: 'Site - devpolice_core',
                link: 'https://devsofc.github.io/devpolice_core',
                descricao: ''
            },
            {
                title: 'Site - Membros',
                link: 'https://devsofc.github.io/membros',
                descricao: ''
            },
            {
                title: 'Discord',
                link: 'https://devsofc.github.io/membros',
                descricao: ''
            }
        ],
        fundador: {
            nome: 'Valdivino Junior',
            numero: '553898994543'
        },
        administradores: [
            {
                nome: 'Adrian Alencar',
                numero: '5511933571791'
            },
            {
                nome: 'Diego',
                numero: '5511959863010'
            },
            {
                nome: 'Eliabe Barbosa',
                numero: '556183809149'
            },
            {
                nome: 'Guilherme',
                numero: '5522981274455'
            },
            {
                nome: 'Valdivino Junior',
                numero: '553898994543'
            },
        ]
    },
    sms: {
        wait: '⌛ Processando... ⌛',
        success: '✔️ Sucesso ✔️',
        error: '❌',
        only: {
            group: '[❗] Este comando só pode ser usado em grupos! ❌',
            owner: 'Comando não autorizado.',
            admin: 'Apenas administradores podem usar este comando.',
            botadmin: 'Preciso de acesso administrativo',
        }
    }
}

module.exports = { conf }