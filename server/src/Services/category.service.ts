import categoryRepository from "../Repositories/category.repository";

class CategoryService{
    async getAll(){
        const result = await categoryRepository.getAll();
        console.log(result)
        return {message: result};
    }
}

export default new CategoryService;