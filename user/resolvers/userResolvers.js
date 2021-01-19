const arrayUsers = [
    {
        nome: 'Reginaldo',
        ativo: true
    },
    {
        nome: 'Augusta',
        ativo: false
    }
]

const userResolvers = { 
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0]
    }
};

module.exports = userResolvers