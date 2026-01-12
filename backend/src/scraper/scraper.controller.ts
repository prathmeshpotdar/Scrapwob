import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
    constructor(private readonly scraperService: ScraperService) { }

    @Post('navigation')
    async scrapeNavigation() {
        await this.scraperService.scrapeNavigation();
        return { message: 'Navigation scrape triggered' };
    }

    @Post('category')
    async scrapeCategory(@Body('url') url: string) {
        const products = await this.scraperService.scrapeCategory(url);
        return { count: products.length, products };
    }
}
