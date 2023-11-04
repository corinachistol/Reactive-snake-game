## Snake Game
    > JS: loops, conditional ,functional, OOP , timers
    > DOM: structure,manipualtion, events
    > Algorithms
    > dat astructure: Tree, Hierarchy, Array, Object, JSON
    > storage /AJAX/ fetch
    > node,webpack
    > jsx
    > react: functional, hooks, state management, routing, forms...
    > Material UI
 

    css: sass
    > TS


## Stage1 / front / react
    >init
    >strip down (SPA = browserul incarca un singur doc HTML prin request si restul se incarca prin fetch ori AJAX. Documentul ramine acelasi dar ,aplicatia ii schimba structura, elementele , rerandeaza parti din acest document fara  ca sa reincarci pagina de pe server)

    > hierarchi (UI,Model)
    > inside-out

        UI
    +----------------+
    |                 |
    |                 |
    |                 | <----------
    |                 |             DATA LAYER (Model)
    |                 | ---------->
    |                 |
    +----------------+

    UI
    |
    +----Map (HoC)
          |
          |
          + ---Snake
          |      |
          |      + ------children [
          |                 0 -----  SnakeHead
          |                 1 -----  SnakeBody 
          |                 2 -----  Snakebody
          |                 ....
          |                 n-1 ----  SnakeBody
          |                n -----  SnakeTail
          |             ]
          + ----Mouse 



          component.js <------------ import 'style.scss'
                                        ^
                                        |           ...
                                        |            url(.../image.jpg)
                                    process



src(editor) -------> compilation -----> loads/mounts -----> vDOM ---> render -----DOM ---->window
    ^                                                         |
    |                                                         |
    |                                                       state management aici se incarca
    change                                                  



+-----------------functionale SnakeHead () -------------+   +-----------------------+
|                                                       |   |                       |
|                                                       |   |                       |
|            ....                                       |   |                       |
|             const[dir.setDir]  = useState('up)---------------> ['up]  <--         |
|            ....    ^      ^                           |   |        |    |         |
|                    |      | +-------------------------------- (val)|=>{ val   }   |
|                    |-----------------------------------------------+    |         |
|                                                       |   |              +---update ----->vDOM
|                                                       |   |                       |
+-------------------------------------------------------+   +-----------------------+