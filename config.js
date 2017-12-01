module.exports = {
    SLEEP_TIME_OUT: 15000,
    MAX_CONCURRENCY: 3,
    MAX_RETRIES: 1,
    UA:'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0',
    DB: {
        name: 'xiaozhuSpider',
        host: '202.116.148.193',
        user: 'root',
        passwd: '123456',
        port: 3306
    },
    REDIS: {
        host: '127.0.0.1',
        redis: '',
        port: 6379        
    },
}