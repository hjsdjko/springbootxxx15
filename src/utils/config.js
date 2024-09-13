const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cl1410396/front/index.html'
        }
    },
    getProjectName(){
        return {
            projectName: "基于java的城市公交查询系统"
        } 
    }
}
export default config
