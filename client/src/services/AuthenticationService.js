import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('signUp', credentials)
  },
  login (credentials) {
    return Api().post('signIn', credentials)
  },
  
}
/*AuthenticationService.register({
    email: 'testing@gmail.com',
    password: '123456'
})
*/