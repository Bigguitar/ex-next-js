import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesQuery } from './articles.query';
import { Article } from './article.entity';
import { CreateArticleRequest } from './create-article.request';
import { UpdateArticleRequest } from './update-article.request';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get('/')
  public findAll(@Query() query: ArticlesQuery): Promise<Article[]> {
    return this.articlesService.findAll(query);
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  @Post('/')
  public create(@Body() request: CreateArticleRequest): Promise<Article> {
    return this.articlesService.create(request);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() request: UpdateArticleRequest,
  ): Promise<Article> {
    return this.articlesService.update(id, request);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    await this.articlesService.delete(id);
  }
}
