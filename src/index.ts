import { UserInfo, UserInfoCSV } from "./intefaces/data"
import { FileService } from './service/fileService'

const path = process.cwd()

async function init(): Promise<any> {
  const service = new FileService()
  console.log('..::Start::..')
  const listUsers: UserInfo[] = await service.readData(path)
  console.log('Format element')
  const userInfo: UserInfoCSV[] = listUsers.map((user) => {
    return { 
      userId: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
      zipcode: user.address.zipcode,
    }
  })

  await service.generateCsv(userInfo, path)
  console.log('..::Finish::..')
  return
}

init()