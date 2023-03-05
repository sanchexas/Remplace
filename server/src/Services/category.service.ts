import categoryRepository from "../Repositories/category.repository";

class CategoryService{
    async getAll(){
        const result = await categoryRepository.getAll();
        return {message: result};
    }
}

export default new CategoryService;