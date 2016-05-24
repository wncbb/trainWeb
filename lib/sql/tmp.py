from user import User
#
ret=User.select({'username': 'jbkj'})
print(ret)
#
# tmp=User.changePw({'id':1, 'newPasswd':'1234', 'newUsername':'asd'})
# print(tmp)
# #
# print(User.verifyUser({'username':'asd', 'passwd':'123'}))

#tmp=User.add('test', '123', 0)
#tmp = User.deleteUser({'updateId':'1', 'delId':'2'})
#tmp = User.check('test')
#print(tmp)

#print(User.verifyUser({'username':'asd', 'passwd':'123'}))
