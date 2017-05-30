import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';


process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));
webpack(webpackConfig).run((err,stats)=>{
    if(err){
        console.log(chalk.red(err)); //eslint-disable-line no-console
        return 1;
    }
    else{
        const jsonStats = stats.toJson();
        if(jsonStats.hasErrors){
            return jsonStats.errors.map(error => console.log(chalk.red(error))); //eslint-disable-line no-console
        }
        if(jsonStats.hasWarnings){
            console.log(chalk.yellow('Webpack generated the following warnings: ')); //eslint-disable-line no-console
            jsonStats.warnings.map(warning => console.log(chalk.yellow(warning))); //eslint-disable-line no-console
            console.log(`Webpack stats: ${stats}`); //eslint-disable-line no-console
            console.log(chalk.green('Your app has been built for production and written to /disc')) // eslint-disable-line no-console
        }
        return 0;
    }
})