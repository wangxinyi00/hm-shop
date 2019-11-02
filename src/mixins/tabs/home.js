import wepy from "wepy"
export default class Home extends wepy.mixin{
    data={
        swiperData: [],//轮播图数据
        cateData: [],  //分类数据
        floorData:[]
    }
    config={

    }
    methods={

    }
     //获取轮播图数据
     async getSwiperData() {
        const { data } = await wepy.get('/home/swiperdata')
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        wepy.baseToast('获取数据成功','success')
        this.swiperData = data.message
        this.$apply()
    }

    //获取分类数据
    async getCateData() {
        const { data } = await wepy.get('/home/catitems')
        // console.log(data);
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.cateData = data.message
        this.$apply()
    }

    //获取楼层数据
    async getFloorData(){
        const { data } = await wepy.get('/home/floordata')
        // console.log(data);
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.floorData = data.message
        this.$apply()
    }
    onLoad() {
        this.getSwiperData()
        this.getCateData()
        this.getFloorData()
    }
}