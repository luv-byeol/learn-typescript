type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAge = {[K in Heroes]: number}
const ages: HeroAge = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}