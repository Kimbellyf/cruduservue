import Api from '@/services/Api'

export default{
    signup(credentials){
        return Api().post('signup', credentials)
    }
}

/*AuthenticationService.register({
    email: 'testing@gmail.com',
    password: '123456'
})
*/