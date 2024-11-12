type Background = 'allanimals.jpg' | 'banner_cat.jpg' | 'banner_dog.jpg' | 'banner_fish.jpg';

export const createDescriptionObject = (title: string, background: Background) => {
    return {
        title: title,
        background: background
    };
};