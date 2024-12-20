import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import type { Repository } from 'typeorm';
import type { CreateCategoryDto } from './dto/createCategoryDto';
import type { UpdateCategoryDto } from './dto/updateCategoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);

    return this.categoryRepository.save(category);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: Category['id']) {
    return this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: Category['id'], updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: string) {
    return this.categoryRepository.delete(id);
  }
}
