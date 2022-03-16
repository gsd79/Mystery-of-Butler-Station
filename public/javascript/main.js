//need to work on scrolling, finish Spaceship layout, get doors installed.

(function () {
  "use strict";

  var controller, display, game;

  controller = {
    down: false,
    left: false,
    right: false,
    up: false,
    enter: false,

    keyUpDown: function (event) {
      var key_state = event.type == "keydown" ? true : false;

      switch (event.keyCode) {
        case 65:
          controller.left = key_state;
          break; // left key
        case 87:
          controller.up = key_state;
          break; // up key
        case 68:
          controller.right = key_state;
          break; // right key
        case 83:
          controller.down = key_state;
          break; // down key
        case 13:
          controller.enter = key_state;
          //console.log("enter key pressed");
          break;
      }
    },
  };

  (display = {
    buffer: document.createElement("canvas").getContext("2d"),
    context: document.querySelector("canvas").getContext("2d"),
    output: document.querySelector("p"),

    render: function () {
      for (let index = game.world.map.length - 1; index > -1; --index) {
        if (game.world.map[index] > 0 && game.world.map[index] !== 9) {
          this.buffer.fillStyle = "#2bc22b";
        } else if (game.world.map[index] === 9) {
          this.buffer.fillStyle = "#694929";
        } else {
          this.buffer.fillStyle = "#303840";
        }
        //map logic
        this.buffer.fillRect(
          (index % game.world.columns) * game.world.tile_size,
          Math.floor(index / game.world.columns) * game.world.tile_size,
          game.world.tile_size,
          game.world.tile_size
        );
      }

      //this.buffer.fillStyle = game.player.color;
      //this.buffer.fillRect(
      // game.player.x,
      // game.player.y,
      // game.player.width,
      // game.player.height

      //draws map object
      // this.context.drawImage(
      //  this.buffer.canvas,
      // 0,
      //  0,
      // this.buffer.canvas.width,
      // this.buffer.canvas.height,
      //  0,
      //  0,
      // this.context.canvas.width,
      //  this.context.canvas.height
      // );

      this.buffer.fillStyle = game.player.color;
      this.buffer.fillRect(
        game.player.x,
        game.player.y,
        game.player.width,
        game.player.height
      );

      this.buffer.fillStyle = game.npc.color;
      this.buffer.fillRect(
        game.npc.x,
        game.npc.y,
        game.npc.width,
        game.npc.height
      );

      //this.buffer.fillStyle = game.npc_two.color;
      // this.buffer.fillRect(
      //  game.npc_two.x,
      //  game.npc_two.y,
      //  game.npc_two.width,
      //  game.npc_two.height
      //  );

      // this.buffer.fillStyle = game.npc_three.color;
      //  this.buffer.fillRect(
      //   game.npc_three.x,
      //   game.npc_three.y,
      //   game.npc_three.width,
      //   game.npc_three.height
      //  );

      // this.buffer.fillStyle = game.npc_two.color;
      // this.buffer.fillRect(
      //   game.npc_four.x,
      //   game.npc_four.y,
      //   game.npc_four.width,
      //   game.npc_four.height
      // );
      //draws NPC and player objects
      this.context.drawImage(
        this.buffer.canvas,
        0,
        0,
        this.buffer.canvas.width,
        this.buffer.canvas.height,
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );
    },

    resize: function (event) {
      var client_height = document.documentElement.clientHeight;

      display.context.canvas.width = document.documentElement.clientWidth - 32;

      if (display.context.canvas.width > client_height) {
        display.context.canvas.width = client_height;
      }

      display.context.canvas.height = Math.floor(
        display.context.canvas.width * 0.65
      );

      display.render();
    },
  }),
    (game = {
      /* This is the player object. Make sure to note that for this collision method
      to work, you must record the current and last positions of your game objects
      to use in collision detection. It is used to calculate the vector used to determine
      if an object is entering into a collision tile and from what side. */
      player: {
        color: "#ff9900",
        height: 10,
        old_x: 160, // these are what you should take note of. Don't worry, it's useful
        old_y: 160, // to keep track of old positions for many physics methods. These aren't one trick pony's.
        velocity_x: 0,
        velocity_y: 0,
        width: 10,
        x: 160 - 16,
        y: 100 - 16,

        // These functions just make it easy to read the collision code
        get bottom() {
          return this.y + this.height;
        },
        get oldBottom() {
          return this.old_y + this.height;
        },
        get left() {
          return this.x;
        }, // kind of pointless, but used
        get oldLeft() {
          return this.old_x;
        }, // to help visualize the collision methods
        get right() {
          return this.x + this.width;
        },
        get oldRight() {
          return this.old_x + this.width;
        },
        get top() {
          return this.y;
        }, // equally pointless as left side calculations
        get oldTop() {
          return this.old_y;
        },
      },

      npc: {
        color: "#0000FF", //npc is blue
        height: 10,
        width: 10,
        x: 120 - 16,
        y: 100 - 16,

        // These functions just make it easy to read the collision code
        get bottom() {
          return this.y + this.height;
        },
        get oldBottom() {
          return this.old_y + this.height;
        },
        get left() {
          return this.x;
        }, // kind of pointless, but used
        get oldLeft() {
          return this.old_x;
        }, // to help visualize the collision methods
        get right() {
          return this.x + this.width;
        },
        get oldRight() {
          return this.old_x + this.width;
        },
        get top() {
          return this.y;
        }, // equally pointless as left side calculations
        get oldTop() {
          return this.old_y;
        },
      },

      world: {
        columns: 24,
        rows: 24,
        tile_size: 20,

        map: [
          1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 3, 2, 0, 0, 0, 5, 5, 9, 5, 5, 9, 9, 5, 0, 5, 5, 5, 5, 0, 0, 5, 5,
          5, 5, 3, 2, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0,
          0, 0, 0, 3, 2, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0,
          0, 0, 0, 0, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 0, 0,
          0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0,
          0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5,
          0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0,
          5, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0,
          0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0,
          0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5,
          0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5,
          5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4,
        ],

        // 1s are ceiling tiles
        // 2s and 3s are left and right wall tiles
        // 5 is a solid block/box tile
        // 4 is a floor tile
        //9 is Door tile
        // the routing functions below with matching numbers
        // represent these tiles and route their values to
        // the collision methods you might expect based on their names
      },

      /* This object is responsible for getting the collision methods that match
  tile values in the map. It uses what I call routing functions to group reusable
  narrow phase collision methods together to create a variety of different tile
  boundary shapes. You can get the same effect with an array of routing functions rather
  than giving an object's routing functions numeric indexes, if you prefer. It might be faster. */
      collision: {
        // top wall collision tile
        1: function (object, row, column) {
          // The player hits the bottom of ceiling tiles.
          this.topCollision(row, object);
        },

        // left wall collision tile
        2: function (object, row, column) {
          this.rightCollision(column, object);
        },

        // right wall collision tile
        3: function (object, row, column) {
          // The player collides with the left side of a wall on the right of the map.
          this.leftCollision(column, object); // Confusing to visualize, but true.
        },

        // bottom wall collision tile
        4: function (object, row, column) {
          this.topCollision(row, column);
        },

        // block tile with four walls
        5: function (object, row, column) {
          if (this.topCollision(object, row)) {
            return;
          } // Make sure to early out
          if (this.leftCollision(object, column)) {
            return;
          } // if a collision is detected.
          if (this.rightCollision(object, column)) {
            return;
          }
          this.bottomCollision(object, row); // No need to early out on the last check.
        },
        9: function (object, row, column) {
          if (this.topCollision(object, row)) {
            return;
          } // Make sure to early out
          if (this.leftCollision(object, column)) {
            return;
          } // if a collision is detected.
          if (this.rightCollision(object, column)) {
            return;
          }
          this.bottomCollision(object, row);
        },

        leftCollision(object, column) {
          if (object.x - object.old_x > 0) {
            // the left side of the specified tile column
            var left = column * game.world.tile_size;

            if (object.right > left && object.oldRight <= left) {
              object.velocity_x = 0;
              object.x = object.old_x = left - object.width - 0.001;

              return true;
            }
          }

          return false;
        },

        rightCollision(object, column) {
          if (object.x - object.old_x < 0) {
            // the right side of the specified tile column
            var right = (column + 1) * game.world.tile_size;

            if (object.left < right && object.oldLeft >= right) {
              object.velocity_x = 0;
              object.old_x = object.x = right;

              return true;
            }
          }

          return false;
        },

        bottomCollision(object, row) {
          // if the object is moving up
          if (object.y - object.old_y < 0) {
            var bottom = (row + 1) * game.world.tile_size;

            if (object.top < bottom && object.oldTop >= bottom) {
              object.velocity_y = 0;
              object.old_y = object.y = bottom;
            }
          }
        },

        topCollision(object, row) {
          // if the object is moving down
          if (object.y - object.old_y > 0) {
            // the top side of the specified tile row
            var top = row * game.world.tile_size;

            // if the object has passed through the tile boundary since the last game cycle
            if (object.bottom > top && object.oldBottom <= top) {
              object.velocity_y = 0;
              object.old_y = object.y = top - object.height - 0.01;

              return true;
            }
          }

          return false;
        },
      },

      // The game loop:
      loop: function () {
        // Get controller input and move that player object!
        if (controller.down) {
          game.player.velocity_y += 0.15;
          console.log("Player x-axis", game.player.x);
          console.log("Player y-axis", game.player.y);
        }

        if (controller.left) {
          game.player.velocity_x -= 0.25;
        }

        if (controller.right) {
          game.player.velocity_x += 0.25;
        }

        if (controller.up) {
          game.player.velocity_y -= 0.25;
          console.log("Player x-axis", game.player.x);
          console.log("Player y-axis", game.player.y);
        }

        // Update the player object:
        game.player.old_x = game.player.x; // Set the old position to the current position
        game.player.old_y = game.player.y; // before we update the current position, thus making it current

        game.player.x += game.player.velocity_x; // Update the current position
        game.player.y += game.player.velocity_y;

        // Do collision detection and response with the boundaries of the screen.
        if (game.player.x < 0) {
          game.player.velocity_x = 0;
          game.player.old_x = game.player.x = 0;
        } else if (
          game.player.x + game.player.width >
          display.buffer.canvas.width
        ) {
          game.player.velocity_x = 0;
          game.player.old_x = game.player.x =
            display.buffer.canvas.width - game.player.width - 0.001;
        }

        if (game.player.y < 0) {
          game.player.velocity_y = 0;
          game.player.old_y = game.player.y = 0;
        } else if (
          game.player.y + game.player.height >
          display.buffer.canvas.height
        ) {
          game.player.velocity_y = 0;
          game.player.old_y = game.player.y =
            display.buffer.canvas.height - game.player.height - 0.001;
        }
        if (game.player.x - game.player.old_x < 0) {
          // test collision on left side of player if moving left
          var left_column = Math.floor(game.player.left / game.world.tile_size);
          var bottom_row = Math.floor(
            game.player.bottom / game.world.tile_size
          );
          var value_at_index =
            game.world.map[bottom_row * game.world.columns + left_column];

          if (value_at_index != 0) {
            // Check the bottom left point

            game.collision[value_at_index](
              game.player,
              bottom_row,
              left_column
            );
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }

          var top_row = Math.floor(game.player.top / game.world.tile_size);
          value_at_index =
            game.world.map[top_row * game.world.columns + left_column];

          if (value_at_index != 0) {
            // Check the top left point

            game.collision[value_at_index](game.player, top_row, left_column);
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }
        } else if (game.player.x - game.player.old_x > 0) {
          // Is the player moving right?

          var right_column = Math.floor(
            game.player.right / game.world.tile_size
          );
          var bottom_row = Math.floor(
            game.player.bottom / game.world.tile_size
          );
          var value_at_index =
            game.world.map[bottom_row * game.world.columns + right_column];

          if (value_at_index != 0) {
            // Check the bottom right point

            game.collision[value_at_index](
              game.player,
              bottom_row,
              right_column
            );
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }

          var top_row = Math.floor(game.player.top / game.world.tile_size);
          value_at_index =
            game.world.map[top_row * game.world.columns + right_column];

          if (value_at_index != 0) {
            // Check the top right point

            game.collision[value_at_index](game.player, top_row, right_column);
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }
        }

        if (game.player.y - game.player.old_y < 0) {
          var left_column = Math.floor(game.player.left / game.world.tile_size);
          var top_row = Math.floor(game.player.top / game.world.tile_size);
          var value_at_index =
            game.world.map[top_row * game.world.columns + left_column];

          if (value_at_index != 0) {
            // Check the top left point

            game.collision[value_at_index](game.player, top_row, left_column);
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }

          var right_column = Math.floor(
            game.player.right / game.world.tile_size
          );
          value_at_index =
            game.world.map[top_row * game.world.columns + right_column];

          if (value_at_index != 0) {
            // Check the top right point

            game.collision[value_at_index](game.player, top_row, right_column);
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }
        } else if (game.player.y - game.player.old_y > 0) {
          var left_column = Math.floor(game.player.left / game.world.tile_size);
          var bottom_row = Math.floor(
            game.player.bottom / game.world.tile_size
          );
          var value_at_index =
            game.world.map[bottom_row * game.world.columns + left_column];

          if (value_at_index != 0) {
            // Check the bottom left point

            game.collision[value_at_index](
              game.player,
              bottom_row,
              left_column
            );
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }

          var right_column = Math.floor(
            game.player.right / game.world.tile_size
          );
          value_at_index =
            game.world.map[bottom_row * game.world.columns + right_column];

          if (value_at_index != 0) {
            // Check the bottom right point

            game.collision[value_at_index](
              game.player,
              bottom_row,
              right_column
            );
            display.output.innerHTML =
              "last tile collided with: " + value_at_index;
          }
        }

        game.player.velocity_x *= 0.9;
        game.player.velocity_y *= 0.9;

        display.render();

        window.requestAnimationFrame(game.loop);
      },
    });

  display.buffer.canvas.height = 300;
  display.buffer.canvas.width = 420;

  window.addEventListener("resize", display.resize);
  window.addEventListener("keydown", controller.keyUpDown);
  window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      validate(event);
    }

    async function validate(event) {
      console.log(event);
      var text = event.target.value;
      fetch("/api/questions/1").then((response) => {
        response.json().then((questions) => {
          const formatQuestions = questions.map((question) => {
            return {
              ...question,
              choices: question.choices.split(",").map((c) => c.trim()),
            };
          });

          getQuestion(formatQuestions);
        });
      });
    }
  });

  let currentQuestionIndex = 0;
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var feedbackEl = document.getElementById("feedback");
  var startBtn = document.getElementById("start");

  function getQuestion(questions) {
    let currentQuestion = questions[currentQuestionIndex];

    let questionTitleElement = document.querySelector("#question-title");

    questionTitleElement.textContent = currentQuestion.question;

    // clear out any old question choices
    choicesEl.textContent = "";
    // choicesEl.innerHTML = "";

    currentQuestion.choices.forEach((element, index) => {
      //console.log("element", element);
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      //choiceNode.setAttribute("value", element);
      choiceNode.textContent = index + 1 + ". " + element;

      choiceNode.addEventListener("click", function () {
        questionClick(questions, element);
      });

      choicesEl.appendChild(choiceNode);
      //console.log("choiceNode", choiceNode)
    });
  }

  function questionClick(quizQuestions, answer) {
    if (answer !== quizQuestions[currentQuestionIndex].answer) {
      feedbackEl.textContent = "Wrong";
    } else {
      feedbackEl.textContent = "Correct";
    }

    feedbackEl.removeAttribute("class");

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === quizQuestions.length) {
      quizEnd();
      //alert("Quiz is over");
    } else {
      getQuestion(quizQuestions);
    }
  }

  window.addEventListener("keyup", controller.keyUpDown);

  display.resize();

  game.loop();
})();
