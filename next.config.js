module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://pm3uf3zsxf.us-east-1.awsapprunner.com/:path*' 
        }
      ]
    }
  }
  
