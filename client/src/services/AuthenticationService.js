import Api from '@/services/Api'

export default {
  signup (credentials) {
    return Api().post('signUp', credentials)
  },
  signin (credentials) {
    return Api().post('signIn', credentials)
  },
  
}
/*AuthenticationService.register({
    email: 'testing@gmail.com',
    password: '123456'
})
*/