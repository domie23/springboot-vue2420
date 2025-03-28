const base = {
    get() {
        return {
            url : "http://localhost:8080/kaowubaoming/",
            name: "kaowubaoming",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kaowubaoming/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "考务报名平台"
        } 
    }
}
export default base
