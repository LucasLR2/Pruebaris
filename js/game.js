// Banco de preguntas (todas las 70 preguntas)
const questions = [
    { q: "¿Qué es la programación orientada a objetos (POO)?", options: ["Un estilo de programación basado en procedimientos y funciones globales", "Una forma de programar utilizando únicamente estructuras de control", "Un paradigma que organiza el software en clases y objetos que modelan el mundo real", "Un lenguaje específico para programar interfaces gráficas", "Un método de optimización de bases de datos relacionales", "Un algoritmo de ordenamiento complejo"], correct: 2 },
    { q: "¿Cuáles son los pilares básicos de la programación orientada a objetos?", options: ["Herencia, Recursividad, Modularidad, Polimorfismo", "Encapsulamiento, Herencia, Polimorfismo, Abstracción", "Modularidad, Tipado, Herencia, Polimorfismo", "Encapsulamiento, Modularidad, Tipado, Abstracción", "Polimorfismo, Recursividad, Encapsulamiento, Modularidad", "Herencia, Tipado, Recursividad, Abstracción"], correct: 1 },
    { q: "¿Qué es un objeto en programación orientada a objetos?", options: ["Un tipo de dato primitivo", "Una función que retorna valores", "Una instancia de una clase", "Un archivo ejecutable", "Un método estático", "Un proceso en ejecución"], correct: 2 },
    { q: "¿Qué es la sobrecarga de métodos (overload)?", options: ["Definir varios métodos con el mismo nombre pero diferentes parámetros", "Definir varios métodos con el mismo nombre y mismos parámetros", "Llamar a un método desde otro", "Heredar métodos de una clase base", "Sobrescribir un método de la clase padre", "Crear métodos privados"], correct: 0 },
    { q: "¿Qué es una excepción?", options: ["Un tipo de variable", "Un error que ocurre en tiempo de compilación", "Un evento que interrumpe el flujo normal de un programa", "Un ciclo infinito", "Un tipo de dato booleano", "Un método especial"], correct: 2 },
    { q: "¿Qué es la encapsulación?", options: ["La capacidad de una clase de heredar de otra", "El proceso de ocultar los detalles internos de un objeto", "La capacidad de un objeto de comportarse como otro", "El uso de variables globales", "La sobrecarga de operadores", "La creación de interfaces"], correct: 1 },
    { q: "¿Cuál de las siguientes opciones describe mejor el polimorfismo?", options: ["La capacidad de un objeto de tener múltiples formas", "La capacidad de una clase de tener múltiples constructores", "La capacidad de una función de retornar diferentes tipos de datos", "La capacidad de una variable de cambiar de tipo en tiempo de ejecución", "La capacidad de un método de acceder a variables privadas", "La capacidad de una clase de tener múltiples padres"], correct: 0 },
    { q: "¿Qué es la herencia múltiple?", options: ["Cuando una clase hereda de varias interfaces", "Cuando una clase hereda de varias clases", "Cuando una clase implementa varios métodos", "Cuando una clase tiene varios constructores", "Cuando una clase tiene varias instancias", "Cuando una clase tiene varios atributos"], correct: 1 },
    { q: "¿Cuál es la diferencia entre una clase abstracta y una interfaz?", options: ["Una clase abstracta puede tener métodos implementados, una interfaz no", "Una interfaz puede tener atributos privados, una clase abstracta no", "Una clase abstracta no puede ser heredada, una interfaz sí", "Una interfaz puede tener constructores, una clase abstracta no", "Una clase abstracta solo puede tener métodos estáticos", "No hay diferencia"], correct: 0 },
    { q: "¿Qué sucede si una clase hija sobrescribe un método de la clase padre?", options: ["El método de la clase padre nunca se ejecuta", "El método de la clase hija reemplaza al de la clase padre al ser llamado desde la hija", "Ambos métodos se ejecutan en orden de declaración", "El método de la clase padre se ejecuta primero y luego el de la hija", "El método de la clase hija solo puede ser llamado desde la clase padre", "El método de la clase hija debe ser privado"], correct: 1 },
    { q: "¿Cuál de las siguientes afirmaciones sobre constructores es correcta?", options: ["Un constructor puede ser llamado explícitamente como cualquier otro método", "Una clase puede tener múltiples constructores con diferentes parámetros", "Un constructor puede retornar valores", "Un constructor debe ser siempre público", "Un constructor puede ser estático", "Un constructor no puede tener parámetros"], correct: 1 },
    { q: "¿Cuál de las siguientes es una estructura LIFO?", options: ["Cola", "Pila", "Lista enlazada", "Árbol binario", "HashMap", "Array"], correct: 1 },
    { q: "¿Cuál de las siguientes sentencias accede al primer elemento de un array llamado TestArray en Java?", options: ["TestArray[0]", "TestArray[1]", "TestArray.first()", "TestArray.get(0)", "TestArray.firstElement()", "TestArray['0']"], correct: 0 },
    { q: "Considere un Array llamado TestArray de tamaño 4. ¿Cuál es el resultado de la operación TestArray[4] = null;?", options: ["El valor del último elemento se vuelve null", "Se produce un error de índice fuera de rango", "El array se expande automáticamente", "El primer elemento se elimina", "El array se vacía", "No ocurre ningún cambio"], correct: 1 },
    { q: "¿Qué tipos de valores puede contener un array en Java?", options: ["Solo enteros", "Solo cadenas de texto", "Cualquier tipo de dato compatible con la declaración del array", "Solo objetos", "Solo booleanos", "Solo números decimales"], correct: 2 },
    { q: "¿Cuál es la principal diferencia entre una lista enlazada y un array?", options: ["Un array puede crecer dinámicamente, una lista enlazada no", "Una lista enlazada almacena elementos en posiciones contiguas de memoria", "Un array tiene acceso aleatorio, una lista enlazada acceso secuencial", "Un array solo puede almacenar enteros", "Una lista enlazada no puede almacenar objetos", "No hay diferencia"], correct: 2 },
    { q: "¿Cuál de las siguientes estructuras de datos es más eficiente para implementar una cola de prioridad?", options: ["Lista enlazada simple", "Pila", "Árbol heap binario", "Array estático", "HashMap", "Árbol AVL"], correct: 2 },
    { q: "¿Qué operación es más eficiente en una tabla hash?", options: ["Búsqueda", "Inserción al final", "Eliminación al principio", "Ordenamiento", "Recorrido completo", "Inserción en el medio"], correct: 0 },
    { q: "¿Cuál es la complejidad temporal promedio de búsqueda en un árbol binario de búsqueda balanceado?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)", "O(n log n)", "O(2^n)"], correct: 1 },
    { q: "¿Qué estructura de datos es más adecuada para implementar una función de deshacer (undo)?", options: ["Cola", "Pila", "Lista doblemente enlazada", "Árbol binario", "HashMap", "Array circular"], correct: 1 },
    { q: "¿Cuál es la principal ventaja de una lista doblemente enlazada sobre una simple?", options: ["Permite recorrer la lista en ambos sentidos", "Ocupa menos memoria", "Es más rápida para insertar al final", "No requiere nodos", "Permite acceso aleatorio", "Es más fácil de ordenar"], correct: 0 },
    { q: "¿Qué sucede con el código bajo la sentencia 'finally' en un bloque 'try-catch-finally' en Java?", options: ["Se ejecuta solo si ocurre una excepción", "Se ejecuta solo si no ocurre una excepción", "Se ejecuta siempre, ocurra o no una excepción", "Se ejecuta solo si el bloque try termina correctamente", "Se ejecuta solo si el bloque catch no captura la excepción", "Nunca se ejecuta"], correct: 2 },
    { q: "Asumiendo que testArray es un arreglo de enteros, ¿cuál de los siguientes fragmentos de código en Java obtiene el valor máximo dentro del array testArray?", options: ["int max = testArray[0]; for(int i=1; i<testArray.length; i++) { if(testArray[i] > max) max = testArray[i]; }", "int max = 0; for(int i=0; i<testArray.length; i++) { max += testArray[i]; }", "int max = testArray.length;", "int max = testArray[0]; for(int i=0; i<testArray.length; i++) { if(testArray[i] < max) max = testArray[i]; }", "int max = 0; for(int i=1; i<testArray.length; i++) { if(testArray[i] > max) max = testArray[i]; }", "int max = testArray[0]; for(int i=1; i<testArray.length; i++) { max = testArray[i]; }"], correct: 0 },
    { q: "Considere una variable llamada miVariable, definida dentro de una función llamada miFuncion que es parte de una clase llamada MiClase. ¿Desde dónde será accesible miVariable?", options: ["Desde cualquier parte del programa", "Solo desde dentro de la función miFuncion", "Desde cualquier método de la clase MiClase", "Desde cualquier función del paquete", "Desde cualquier subclase de MiClase", "Desde cualquier objeto de la clase MiClase"], correct: 1 },
    { q: "¿Cuántas iteraciones realizará el siguiente bloque de código en Java? for(int i = 0; i < 5; i++) { }", options: ["4", "5", "6", "0", "1", "10"], correct: 1 },
    { q: "¿Cuál es el resultado de ejecutar el siguiente código en Java? int suma = 0; for(int i = 1; i <= 3; i++) { suma += i; } System.out.println(suma);", options: ["3", "4", "5", "6", "7", "9"], correct: 3 },
    { q: "¿Qué valor tendrá la variable x después de ejecutar el siguiente código? int x = 10; if(x > 5) { x = x + 2; } else { x = x - 2; }", options: ["8", "10", "12", "5", "7", "2"], correct: 2 },
    { q: "¿Cuál es el propósito de la instrucción break dentro de un ciclo en Java?", options: ["Finalizar el programa", "Saltar a la siguiente iteración", "Salir inmediatamente del ciclo", "Volver al inicio del ciclo", "Ignorar el resto del código", "Lanzar una excepción"], correct: 2 },
    { q: "¿Qué imprime el siguiente código en Java? int[] arr = {2, 4, 6}; System.out.println(arr[1]);", options: ["2", "4", "6", "1", "0", "Error de compilación"], correct: 1 },
    { q: "¿Cuál es el resultado de la siguiente operación lógica en Java? boolean a = true; boolean b = false; System.out.println(a && b);", options: ["true", "false", "1", "0", "null", "Error de compilación"], correct: 1 },
    { q: "¿Qué sucede si se intenta acceder a un índice fuera del rango de un array en Java?", options: ["El valor retornado es null", "El programa termina normalmente", "Se lanza una excepción", "El valor retornado es 0", "El array se expande automáticamente", "El valor retornado es -1"], correct: 2 },
    { q: "¿Cuál es el valor de resultado después de ejecutar el siguiente código? int resultado = 1; for(int i = 1; i <= 3; i++) { resultado *= i; }", options: ["3", "6", "9", "1", "0", "4"], correct: 1 },
    { q: "¿Qué imprime el siguiente código? int x = 5; if(x % 2 == 0) { System.out.println('Par'); } else { System.out.println('Impar'); }", options: ["Par", "Impar", "5", "0", "Error de compilación", "Nada"], correct: 1 },
    { q: "¿Cuál es el valor final de contador? int contador = 0; for(int i = 0; i < 4; i++) { for(int j = 0; j < 2; j++) { contador++; } }", options: ["4", "6", "8", "2", "10", "12"], correct: 2 },
    { q: "¿Qué imprime el siguiente código? int suma = 0; for (int i = 1; i <= 4; i++) { suma += 3; } System.out.println(suma);", options: ["4", "12", "7", "10", "15", "3"], correct: 1 },
    { q: "¿Cuál es el valor de suma después de ejecutar el siguiente código? int suma = 0; int i = 1; while(i < 4) { suma += i; i++; }", options: ["3", "4", "6", "7", "10", "5"], correct: 2 },
    { q: "¿Qué imprime el siguiente código? for(int i = 0; i < 3; i++) { if(i == 1) continue; System.out.print(i); }", options: ["012", "01", "02", "0", "1", "12"], correct: 2 },
    { q: "¿Cuál es el valor de x después de ejecutar el siguiente código? int x = 0; for(int i = 0; i < 5; i++) { if(i % 2 == 0) { x += i; } }", options: ["4", "5", "6", "8", "10", "12"], correct: 2 },
    { q: "¿Qué imprime el siguiente código? int a = 3; int b = 2; if(a > 2 && b < 3) { System.out.println('Verdadero'); } else { System.out.println('Falso'); }", options: ["Verdadero", "Falso", "3", "2", "Error de compilación", "Nada"], correct: 0 },
    { q: "¿Cuál es el valor de y después de ejecutar el siguiente código? int y = 10; for(int i = 0; i < 3; i++) { y -= 2; }", options: ["4", "6", "8", "10", "12", "0"], correct: 0 },
    { q: "¿Qué imprime el siguiente código? for (int i = 2; i <= 6; i += 2) { System.out.print(i); }", options: ["246", "123", "6", "222", "36", "12"], correct: 0 },
    { q: "¿Qué es SQL?", options: ["Un sistema operativo", "Un lenguaje de programación orientado a objetos", "Un lenguaje de consulta estructurado para bases de datos", "Un tipo de base de datos", "Un protocolo de red", "Un sistema de archivos"], correct: 2 },
    { q: "¿Qué es una clave foránea?", options: ["Un campo que identifica de manera única cada registro en una tabla", "Un campo que almacena valores duplicados", "Un campo que referencia la clave primaria de otra tabla", "Un campo que almacena solo valores nulos", "Un campo que almacena contraseñas", "Un campo que almacena fechas"], correct: 2 },
    { q: "¿Qué es una vista en bases de datos?", options: ["Una tabla física", "Una copia de seguridad de la base de datos", "Una tabla virtual basada en el resultado de una consulta", "Un índice", "Un procedimiento almacenado", "Un trigger"], correct: 2 },
    { q: "¿Cuál es la función principal de la sentencia SELECT en SQL?", options: ["Insertar datos", "Eliminar datos", "Consultar datos", "Actualizar datos", "Crear tablas", "Modificar la estructura de la base de datos"], correct: 2 },
    { q: "¿Qué comando SQL se utiliza para eliminar una tabla completa y su estructura?", options: ["DELETE", "REMOVE", "DROP", "ERASE", "CLEAR", "TRUNCATE"], correct: 2 },
    { q: "¿Cuál es la diferencia principal entre DELETE y TRUNCATE en SQL?", options: ["DELETE elimina la tabla, TRUNCATE solo borra los datos", "TRUNCATE elimina la tabla, DELETE solo borra los datos", "DELETE puede usar WHERE, TRUNCATE no", "DELETE es más rápido que TRUNCATE", "No hay diferencia", "DELETE elimina índices, TRUNCATE no"], correct: 2 },
    { q: "¿Qué tipo de relación representa una clave foránea?", options: ["Uno a uno", "Uno a muchos", "Muchos a muchos", "Ninguna", "Circular", "Jerárquica"], correct: 1 },
    { q: "¿Cuál es el resultado de la siguiente consulta SQL? SELECT COUNT(*) FROM empleados WHERE salario > 2000;", options: ["El número total de empleados", "El número de empleados con salario mayor a 2000", "El salario promedio de los empleados", "El salario máximo", "El salario mínimo", "El nombre de los empleados"], correct: 1 },
    { q: "¿Qué comando SQL se utiliza para modificar la estructura de una tabla existente?", options: ["UPDATE", "ALTER", "MODIFY", "CHANGE", "EDIT", "RENAME"], correct: 1 },
    { q: "¿Cuál es la función principal de un servidor DHCP?", options: ["Asignar direcciones IP automáticamente a los dispositivos de la red", "Proteger la red contra ataques externos", "Almacenar archivos compartidos", "Controlar el acceso a Internet", "Monitorear el tráfico de red", "Traducir nombres de dominio a direcciones IP"], correct: 0 },
    { q: "¿Cómo se llama la serie de lineamientos que establecen la forma en cómo dos equipos se comunican entre sí?", options: ["Protocolo", "Algoritmo", "Lenguaje de programación", "Topología", "Dominio", "Paquete"], correct: 0 },
    { q: "¿Qué tipo de redes tienen por finalidad conectar equipos de distintos tipos entre sí, principalmente para uso personal?", options: ["LAN", "WAN", "PAN", "MAN", "SAN", "CAN"], correct: 2 },
    { q: "¿Cuál de las siguientes opciones no es un protocolo?", options: ["TCP", "UDP", "HTTP", "FTP", "HTML", "SMTP"], correct: 4 },
    { q: "¿Qué dispositivo se utiliza para conectar varias redes y dirigir el tráfico entre ellas?", options: ["Switch", "Router", "Hub", "Repetidor", "Módem", "Bridge"], correct: 1 },
    { q: "¿Cuál es la función principal del protocolo DNS?", options: ["Asignar direcciones IP", "Traducir nombres de dominio a direcciones IP", "Proteger la red", "Controlar el acceso a Internet", "Monitorear el tráfico", "Enviar correos electrónicos"], correct: 1 },
    { q: "¿Qué puerto utiliza por defecto el protocolo HTTP?", options: ["20", "21", "22", "25", "80", "443"], correct: 4 },
    { q: "¿Cuál es la principal diferencia entre una red LAN y una red WAN?", options: ["La LAN cubre áreas geográficas grandes, la WAN áreas pequeñas", "La WAN cubre áreas geográficas grandes, la LAN áreas pequeñas", "La LAN utiliza fibra óptica, la WAN no", "La WAN solo conecta computadoras personales", "No hay diferencia", "La LAN es inalámbrica, la WAN es cableada"], correct: 1 },
    { q: "¿Qué protocolo se utiliza para enviar correos electrónicos?", options: ["FTP", "SMTP", "HTTP", "DHCP", "DNS", "SNMP"], correct: 1 },
    { q: "¿Cuál de las siguientes afirmaciones sobre el modelo OSI es correcta?", options: ["Tiene 5 capas", "Tiene 7 capas", "Tiene 3 capas", "Tiene 4 capas", "Tiene 6 capas", "Tiene 8 capas"], correct: 1 },
    { q: "¿Cuál es la función de la memoria caché?", options: ["Almacenar datos de manera permanente", "Almacenar datos de acceso frecuente para acelerar el procesamiento", "Ejecutar instrucciones aritméticas", "Controlar los dispositivos de entrada y salida", "Proteger el sistema contra virus", "Almacenar copias de seguridad"], correct: 1 },
    { q: "¿Qué es el ALU?", options: ["Un tipo de memoria", "La unidad aritmético-lógica del procesador", "Un dispositivo de almacenamiento externo", "Un tipo de bus de datos", "Un sistema operativo", "Otro"], correct: 1 },
    { q: "¿Qué es el hardware?", options: ["Un protocolo de red", "El conjunto de programas de un sistema", "El conjunto de componentes físicos de un sistema", "El sistema operativo de un computador", "El software de aplicación", "El lenguaje de programación"], correct: 2 },
    { q: "¿En cuál componente del computador se guarda la información de manera permanente?", options: ["Memoria RAM", "Memoria caché", "Disco duro", "Procesador", "Fuente de poder", "Tarjeta de video"], correct: 2 },
    { q: "¿Cuál es la función principal de la fuente de poder en un computador?", options: ["Procesar datos", "Almacenar información", "Suministrar energía eléctrica a los componentes", "Ejecutar programas", "Controlar la red", "Mejorar la velocidad del procesador"], correct: 2 },
    { q: "¿Qué componente es responsable de la salida visual en un computador?", options: ["Disco duro", "Tarjeta de red", "Tarjeta gráfica (video)", "Memoria RAM", "Procesador", "Fuente de poder"], correct: 2 },
    { q: "¿Cuál de los siguientes dispositivos es considerado de entrada?", options: ["Monitor", "Impresora", "Teclado", "Altavoz", "Proyector", "Disco duro"], correct: 2 },
    { q: "¿Qué tipo de memoria pierde su contenido al apagar el computador?", options: ["Disco duro", "Memoria ROM", "Memoria RAM", "Memoria flash", "Memoria caché", "CD-ROM"], correct: 2 },
    { q: "¿Cuál es la función principal del bus de datos?", options: ["Almacenar información", "Transportar datos entre los componentes del computador", "Ejecutar instrucciones", "Proteger el sistema", "Controlar la energía eléctrica", "Mejorar la velocidad del procesador"], correct: 1 },
    { q: "¿Qué componente se encarga de coordinar y controlar todas las operaciones del computador?", options: ["Disco duro", "Tarjeta de red", "Unidad de control del procesador", "Fuente de poder", "Memoria RAM", "Tarjeta gráfica"], correct: 2 }
];

// Logros del juego
const achievements = [
    { id: 1, name: "Primer Paso", desc: "Completa tu primera partida", icon: "🎯", condition: (p) => p.stats.totalGames >= 1 },
    { id: 2, name: "Estudiante Dedicado", desc: "Juega 10 partidas", icon: "📚", condition: (p) => p.stats.totalGames >= 10 },
    { id: 3, name: "Perfeccionista", desc: "Obtén 70/70 en modo normal", icon: "💯", condition: (p) => p.stats.bestScoreNormal >= 70 },
    { id: 4, name: "Racha de 10", desc: "Responde 10 preguntas correctas seguidas", icon: "🔥", condition: (p) => p.stats.maxStreak >= 10 },
    { id: 5, name: "Centurión", desc: "Alcanza 100 puntos en modo infinito", icon: "⚡", condition: (p) => p.stats.bestScoreInfinite >= 100 },
    { id: 6, name: "Maestro del Conocimiento", desc: "Responde 500 preguntas correctas", icon: "🎓", condition: (p) => p.stats.totalCorrect >= 500 },
    { id: 7, name: "Incansable", desc: "Juega 50 partidas", icon: "💪", condition: (p) => p.stats.totalGames >= 50 },
    { id: 8, name: "Experto en Normal", desc: "Completa 25 partidas en modo normal", icon: "🏅", condition: (p) => p.stats.normalGames >= 25 },
    { id: 9, name: "Sobreviviente", desc: "Alcanza 200 puntos en modo infinito", icon: "🏆", condition: (p) => p.stats.bestScoreInfinite >= 200 },
    { id: 10, name: "Leyenda de Pruebaris", desc: "Responde 1000 preguntas correctas", icon: "👑", condition: (p) => p.stats.totalCorrect >= 1000 }
];

// Estado del juego
let profile = null;
let currentMode = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let correctCount = 0;
let wrongCount = 0;
let currentStreak = 0;
let maxStreak = 0;

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    loadProfile();
    initializeAvatars();
    
    // Inicializar iconos de Lucide después de cargar el DOM
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

function initializeAvatars() {
    const avatarStyles = [
        'adventurer', 'adventurer-neutral', 'avataaars', 'big-ears',
        'big-smile', 'bottts', 'croodles', 'fun-emoji',
        'icons', 'identicon', 'lorelei', 'micah',
        'miniavs', 'open-peeps', 'personas', 'pixel-art',
        'shapes', 'thumbs', 'bottts-neutral', 'initials'
    ];
    window.avatarStyles = avatarStyles;
}

function loadProfile() {
    const saved = localStorage.getItem('pruebaris_profile');
    if (!saved) {
        window.location.href = 'index.html';
        return;
    }
    
    profile = JSON.parse(saved);
    
    // Inicializar campos si no existen
    if (!profile.stats.maxStreak) profile.stats.maxStreak = 0;
    if (!profile.stats.normalGames) profile.stats.normalGames = 0;
    if (!profile.stats.infiniteGames) profile.stats.infiniteGames = 0;
    
    updateProfileUI();
    updateDashboard();
}

function updateProfileUI() {
    const seed = `avatar${profile.avatar}`;
    const avatarUrl = `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${seed}&backgroundColor=0a5b83,1c799f,69d2e7`;
    
    document.getElementById('profileAvatar').src = avatarUrl;
    document.getElementById('profileName').textContent = profile.username;
    document.getElementById('bestNormal').textContent = profile.stats.bestScoreNormal;
    document.getElementById('bestInfinite').textContent = profile.stats.bestScoreInfinite;
}

function updateDashboard() {
    // Actualizar estadísticas del dashboard
    document.getElementById('dashTotalGames').textContent = profile.stats.totalGames;
    document.getElementById('dashTotalPoints').textContent = profile.stats.totalPoints;
    document.getElementById('dashCorrect').textContent = profile.stats.totalCorrect;
    document.getElementById('dashWrong').textContent = profile.stats.totalWrong;
    
    // Actualizar logros
    const unlockedCount = profile.achievements.length;
    document.getElementById('dashAchievementCount').textContent = unlockedCount;
    
    updateAchievementsDashboard();
    
    // Re-inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function updateAchievementsDashboard() {
    const list = document.getElementById('dashAchievementsList');
    list.innerHTML = '';
    
    achievements.forEach(achievement => {
        const isUnlocked = profile.achievements.includes(achievement.id);
        
        const div = document.createElement('div');
        div.className = `achievement-item ${isUnlocked ? 'unlocked' : ''}`;
        div.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
        `;
        list.appendChild(div);
    });
}

function showMainDashboard() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('mainDashboard').classList.add('active');
    
    // Mostrar perfil flotante
    document.querySelector('.floating-profile').style.display = 'flex';
    
    updateDashboard();
}
function startGame(mode) {
    
    currentMode = mode;
    currentScore = 0;
    correctCount = 0;
    wrongCount = 0;
    currentStreak = 0;
    
    if (mode === 'normal') {
        // Modo normal: todas las 70 preguntas en orden aleatorio
        currentQuestions = shuffleArray([...questions]);
        currentQuestionIndex = 0;
    } else {
        // Modo infinito: preguntas aleatorias infinitas
        currentQuestions = [];
        currentQuestionIndex = 0;
    }
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('gameScreen').classList.add('active');
    
    const badge = document.getElementById('modeBadge');
    badge.textContent = mode === 'normal' ? 'NORMAL' : 'INFINITO';
    badge.style.background = mode === 'normal' ? 'var(--primary)' : 'var(--warning)';
    
    showNextQuestion();
    
    // Re-inicializar iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function showNextQuestion() {
    if (currentMode === 'normal') {
        if (currentQuestionIndex >= currentQuestions.length) {
            endGame();
            return;
        }
        
        document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = currentQuestions.length;
        
        const question = currentQuestions[currentQuestionIndex];
        displayQuestion(question, 1); // Siempre 1 punto en modo normal
        
    } else {
        // Modo infinito: pregunta aleatoria
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        const randomPoints = Math.floor(Math.random() * 3) + 1; // 1-3 puntos
        
        document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = '∞';
        
        displayQuestion(randomQuestion, randomPoints);
    }
    
    document.getElementById('currentScore').textContent = currentScore;
}

function displayQuestion(question, points) {
    document.getElementById('questionText').textContent = question.q;
    document.getElementById('questionPoints').textContent = points === 1 ? '1 punto' : `${points} puntos`;
    
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        btn.onclick = () => checkAnswer(index, question.correct, points, btn);
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(selected, correct, points, btn) {
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.disabled = true);
    
    if (selected === correct) {
        // Respuesta correcta
        btn.classList.add('correct');
        currentScore += points;
        correctCount++;
        currentStreak++;
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }
        
    } else {
        // Respuesta incorrecta
        btn.classList.add('wrong');
        wrongCount++;
        currentStreak = 0;
        
        // Mostrar la correcta
        allButtons[correct].classList.add('correct');
        
        // En modo infinito, restar puntos
        if (currentMode === 'infinite') {
            currentScore = Math.max(0, currentScore - points);
        }
    }
    
    document.getElementById('currentScore').textContent = currentScore;
    
    // Avanzar a la siguiente pregunta después de 1.5 segundos
    setTimeout(() => {
        currentQuestionIndex++;
        showNextQuestion();
    }, 1500);
}

function endGame() {
    // Actualizar estadísticas
    profile.stats.totalGames++;
    profile.stats.totalPoints += currentScore;
    profile.stats.totalCorrect += correctCount;
    profile.stats.totalWrong += wrongCount;
    
    if (currentStreak > profile.stats.maxStreak) {
        profile.stats.maxStreak = currentStreak;
    }
    
    if (currentMode === 'normal') {
        profile.stats.normalGames++;
        if (currentScore > profile.stats.bestScoreNormal) {
            profile.stats.bestScoreNormal = currentScore;
        }
    } else {
        profile.stats.infiniteGames++;
        if (currentScore > profile.stats.bestScoreInfinite) {
            profile.stats.bestScoreInfinite = currentScore;
        }
    }
    
    // Guardar perfil
    localStorage.setItem('pruebaris_profile', JSON.stringify(profile));
    
    // Mostrar pantalla de resultados
    document.getElementById('finalScore').textContent = currentScore;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    
    // Verificar logros nuevos
    checkAchievements();
    
    updateProfileUI();
    
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('resultsScreen').classList.add('active');
    
    // Re-inicializar iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function checkAchievements() {
    const newAchievements = [];
    
    achievements.forEach(achievement => {
        const wasUnlocked = profile.achievements.includes(achievement.id);
        const isNowUnlocked = achievement.condition(profile);
        
        if (!wasUnlocked && isNowUnlocked) {
            profile.achievements.push(achievement.id);
            newAchievements.push(achievement);
        }
    });
    
    const container = document.getElementById('newAchievements');
    container.innerHTML = '';
    
    if (newAchievements.length > 0) {
        container.innerHTML = '<h3 style="color: var(--warning); margin-bottom: 15px;">🎉 ¡Nuevos Logros Desbloqueados!</h3>';
        newAchievements.forEach(ach => {
            const div = document.createElement('div');
            div.className = 'achievement-popup';
            div.innerHTML = `
                <strong>${ach.icon} ${ach.name}</strong><br>
                <small style="color: var(--text-secondary);">${ach.desc}</small>
            `;
            container.appendChild(div);
        });
    }
    
    localStorage.setItem('pruebaris_profile', JSON.stringify(profile));
}

function showMenu() {
    document.getElementById('menuOverlay').classList.add('active');
    document.getElementById('sideMenu').classList.add('active');
    
    // Re-inicializar iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function closeMenu() {
    document.getElementById('menuOverlay').classList.remove('active');
    document.getElementById('sideMenu').classList.remove('active');
}

function exportProfile() {
    const dataStr = JSON.stringify(profile, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pruebaris_${profile.username}_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    alert('¡Perfil exportado exitosamente! 💾');
    closeMenu();
}

function logout() {
    if (confirm('¿Estás seguro de cerrar sesión? Asegúrate de exportar tu perfil si quieres guardar tu progreso.')) {
        localStorage.removeItem('pruebaris_profile');
        window.location.href = 'index.html';
    }
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showProfile() {
    // Mostrar pantalla de editar perfil
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('profileScreen').classList.add('active');

    // Ocultar perfil flotante
    document.querySelector('.floating-profile').style.display = 'none';
    
    // Cargar datos actuales
    const seed = `avatar${profile.avatar}`;
    const avatarUrl = `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${seed}&backgroundColor=0a5b83,1c799f,69d2e7`;
    
    document.getElementById('editProfileAvatar').src = avatarUrl;
    document.getElementById('editProfileName').textContent = profile.username;
    document.getElementById('editUsername').value = profile.username;
    
    // Generar avatares
    generateEditAvatars();
    
    // Cerrar menú
    closeMenu();
    
    // Re-inicializar iconos
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

let selectedEditAvatar = null;

function generateEditAvatars() {
    const grid = document.getElementById('editAvatarGrid');
    grid.innerHTML = '';

    window.avatarStyles.forEach((style, index) => {
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar-item';
        
        // Marcar el avatar actual como seleccionado
        if (index === profile.avatar) {
            avatarDiv.classList.add('selected');
            selectedEditAvatar = index;
        }
        
        avatarDiv.onclick = () => selectEditAvatar(index, avatarDiv);

        const seed = `avatar${index}`;
        avatarDiv.innerHTML = `<img src="https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=0a5b83,1c799f,69d2e7" alt="Avatar ${index}">`;

        grid.appendChild(avatarDiv);
    });
}

function selectEditAvatar(index, element) {
    document.querySelectorAll('#editAvatarGrid .avatar-item').forEach(item => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedEditAvatar = index;
    
    // Actualizar preview
    const seed = `avatar${index}`;
    const avatarUrl = `https://api.dicebear.com/7.x/${window.avatarStyles[index]}/svg?seed=${seed}&backgroundColor=0a5b83,1c799f,69d2e7`;
    document.getElementById('editProfileAvatar').src = avatarUrl;
}

function saveProfileChanges() {
    const newUsername = document.getElementById('editUsername').value.trim();
    
    if (!newUsername) {
        alert('Por favor ingresa un nombre de usuario');
        return;
    }
    
    // Actualizar perfil
    profile.username = newUsername;
    
    if (selectedEditAvatar !== null) {
        profile.avatar = selectedEditAvatar;
        profile.avatarStyle = window.avatarStyles[selectedEditAvatar];
    }
    
    // Guardar en localStorage
    localStorage.setItem('pruebaris_profile', JSON.stringify(profile));
    
    // Actualizar UI
    updateProfileUI();
    updateDashboard();
    
    // Volver al dashboard
    showMainDashboard();
    
    alert('¡Perfil actualizado exitosamente! ✅');
}

function cancelProfileEdit() {
    selectedEditAvatar = null;
    showMainDashboard();
}