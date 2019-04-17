// 新手学堂
const School = () => import('views/school/School')
const SchoolList = () => import('views/school/components/schoolList')
const AddSchool = () => import('views/school/components/AddSchool')

export default [{
  path: '',
  name: 'school',
  component: School,
  redirect: 'school/schoolList',
  children: [
    // 学堂列表
    {
      path: 'schoolList',
      name: 'schoolList',
      component: SchoolList
    },
    // 新增修改学堂内容
    {
      path: 'addSchool',
      name: 'addSchool',
      component: AddSchool
    }
  ]
}]
