import { readFileSync, writeFileSync } from 'fs'
import { parseAsync } from 'json2csv'
import { UserInfoCSV } from '../intefaces/data'

export class FileService {

  async generateCsv(data: UserInfoCSV[], path: string) {
    try {
      console.log('Init Generate file')
      const csv = await parseAsync(data)
      await writeFileSync(`${path}/src/exports/data.csv`, csv)
      console.log('Finish generate file')
    } catch (error) { 
      console.error(error)
    }
  }

  async readData(path: string) {
    try {
      console.log('Init Read data')
      const data = readFileSync(`${path}/src/data.json`, "utf8")
      console.log('Finish Read data')
      return JSON.parse(data)
    } catch (error) {
      console.error(error)
    }
    
  }

}