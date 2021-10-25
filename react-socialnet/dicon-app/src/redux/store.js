import postsReducer from "./posts-reducer";
import profileReducer from "./profile-reducer";





let store = {
    _state: {
        wind: {
            profile: {
                wall: "url('https://nikastroy.ru/wp-content/uploads/5/4/7/547591911ee5124c4a49f0974d464dfa.jpeg')",
                ava: 'https://cdn1.flamp.ru/a7a519d89fb5cc3f13c96188deacd9ab.jpg',
                userName: {
                    title: 'Egor Flamov',
                    isToggleon: false,
                } ,
                birth: {
                    title: '1 Junaury of 2000',
                    isToggleon: false,
                },
                homeland: {
                    title: 'Moscow',
                    isToggleon: false,
                },
                educate: {
                    title: 'School №1',
                    isToggleon: false,
                },
                status: {
                    title: 'Hey! My life is cool ;)',
                    isToggleon: false,
                },
            },
            posts: {
                postcount(){ return this.postlist.length },
                newpostText: '',
                postlist: [
                    {id: 1, title: 'Привет всем!'},
                    {id: 2, title: 'Как дела?'},
                    {id: 3, title: 'Всем мир!'}
                ],
                
    
            },      
        }
        
    },


    // reducer - это функция, которая обязательно принимает в себя state, и объект
    // action. Она изменяет state в соответствие с данными переданными в action
    // и возвращает  переработанный state

    dispatch(action) { // Глобальная функция, которая будет вызывать редусеры
        // Принцип
        //1. Мы прокидываем dispatch в компоненты и импортируем в них креэйторы
        //2. Компонента вызывает dispatch, передавая в аргумент(action) объект сформированный креэйтером, в который передали нужные значения
        //3. dispatch в свою очередь вызывает все reducer, передовая нужную конкретному reducer необходимый ему кусок state, а также передаёт ему объект action
        //4. Каждый reducer берёт action, в котором обязательно есть свойство type, и прогоняет это свойство по свом условиям
        //5. Если type совпадает с каким-то из них reducer преобразует фрагмент state, переданного ему (возможно, используя другие свойства в action) и возвращает переработанный state. *Если reducer не находит у себя ни одного подходящего условия он просто возвращает state без изменений

        this._state.wind.profile = profileReducer(this._state.wind.profile, action); // this._state.wind.profile = самому себе, только преобразованному редусером
        // Отдаём в редусер необходимый ему кусок state и объект action, чтобы он мог вызвать нужный код

        this._state.wind.posts = postsReducer( this._state.wind.posts,  action)



        this.rerender(this._state); //3. Используем переданную в rerender, с помощью функции subscribe,  функцию рендера дерева
    },
    rerender() {},
    getState() {
        return this._state
    }
}



export const subscribe = (observer) => { //1. Функция, с помощью которой мы присваевем какой-то callback к функции rerender
    store.rerender = observer;
}



export default store;