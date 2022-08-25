const citycode = () => {

    /**
     * 
     * @param {*} keyworld // 
     * @returns 버스 노선 해당 정류장 (좌표)
     */
    async function citycodeCall(keyworld) {
        const SERVICE_KEY = "RQv1Nk77cxhZEsb2QLxNK2lBZeNoM8PFkwV7TsTIVEJAABja6LBqDXtUCfFTlxjYQwMAUGRL9HQM999i%2FXjmJA%3D%3D";
        const SERVICE_URL = `https://apis.data.go.kr/1613000/BusRouteInfoInqireService/getCtyCodeList?serviceKey=${SERVICE_KEY}`;

        let response = await fetch(url);
        let data = await response.json();
        return data.msgBody.itemList;
    }

    return citycodeCall;

}

export default citycode;