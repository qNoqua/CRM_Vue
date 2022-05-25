import * as dayjs from 'dayjs'
export const actions = {
  async fetchCurrency(context) {
    const key = process.env.VUE_APP_FIXER
    const myHeaders = new Headers();
    myHeaders.append("apikey", key);
    
    const requestOptions = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      redirect: 'follow',
      headers: myHeaders
    };

    const sample = {
      status:200,
      message:"rates",
      data:{
        USDRUB:"64.1824",
        EURRUB:"69.244"
      },
      date: dayjs().format('HH.mm')
    }
    
    try{
      const res = await fetch(`https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB&key=${key}`, requestOptions)
      let result = await res.json()
      console.log(result)
      if (result.status !== 200) result = sample
      console.log(result)
      context.commit('fetchCurrency', result)
    } catch(e) {
      console.warn(e)
      context.commit('fetchCurrency', sample)
    }

      // .then(response => response.json())
      // .catch(sample);
      // state.response = res;
      // return res
  }
}