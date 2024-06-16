import {PersonalDescriptionModel, StatusEnum, UserModel} from "@/pages";
import {ref} from "vue";

/**
 * Информация о пользователе
 */
export const userData = ref<UserModel>(new UserModel({
    Name: 'Kristin',
    Surname: 'Watson',
    Age: 27,
    Education: 'Masters in Business',
    Status: StatusEnum.Single,
    Occupation: 'Sales Manager',
    Location: 'Sydney',
    TechLiterate: 'High',
    ImageUrl: './photo.png'
}))
/** Биография */
export const biography: string = 'She currenlty lives in Sydney. She finished her master in businesss and has just been promoted to Sales Manager. She is currently single and like to go out with friends on long holidays.'
/** Основные потребности */
const  coreNeedsList: string[] = [
    'Need to find people with similar skills that can help her tackle company goals.',
    'View all her hirings in an overview ',
    'The price of the service is very important'
]
/** Список разочарований */
export const frustrationsList: string[] = [
    'Price is high related to quality they provide',
    'Currently finds perect people from past work relations, family, friends and within my circle and online which is tedious',
    'Not much choice and comparison not available'
]

/** Цитата */
export const quote = 'I am used to work with online service and I usually do my online shopping from Instagram.'

/** Персональные качества */
export const personality = ['Introvert', 'Thinker', 'Spender', 'Tech-savy']

/** Данные для блока справа */
export const personDescriptionBlocks = [
    new PersonalDescriptionModel({Title: 'Bio', Text: biography }),
    new PersonalDescriptionModel({Title: 'Core needs', List: coreNeedsList }),
    new PersonalDescriptionModel({Title: 'Frustrations', List: frustrationsList }),
]

/** Картинки брендов */
export const brandImages = [ 'Nasa', 'Huawei', 'Facebook', 'Youtube', 'Instagram', 'Belle']

/** Способы оплаты */
export const paymentImages = ['Cash', 'Online']

/** Способы оплаты */
export const platformImages = ['Website', 'Mobile']
