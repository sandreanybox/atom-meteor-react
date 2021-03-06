## SYNTAX TEST "source.js.jsx"


Relay.QL`
      fragment on AnalysisImage @relay(plural: true) {
        ${AnalysisImagePlot.getFragment('image')}
##      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  meta.selectionset.graphql
##      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  entity.quasi.element.js
##      ^^                                         punctuation.quasi.element.begin.js
##        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   meta.method-call.with-arguments.js
##        ^^^^^^^^^^^^^^^^^                        variable.other.class.js
##                         ^                       keyword.operator.accessor.js
##                          ^^^^^^^^^^^            entity.name.function.js
##                                     ^       ^   meta.brace.round.js
##                                      ^^^^^^^    string.quoted.single.js
##                                      ^          punctuation.definition.string.begin.js
##                                            ^    punctuation.definition.string.end.js
##                                              ^  punctuation.quasi.element.end.js
        extension
        href
      }
    `

Relay.QL`
## <- variable.other.class.js
 ## <- variable.other.class.js
##^^^      variable.other.class.js
##   ^     keyword.operator.accessor.js
##    ^^   entity.name.tag.grapahql.js
##      ^  string.quoted.template.js
##      ^  punctuation.definition.quasi.begin.js
  # this is a comment
##^ ^^^^ ^^ ^ ^^^^^^^  comment.line.graphql.js
##^                    punctuation.definition.comment.graphql
  interface Character {
##^^^^^^^^^ ^^^^^^^^^ ^  meta.type.interface.graphql
##^^^^^^^^^              keyword.interface.graphql
##          ^^^^^^^^^    support.type.graphql
##                    ^  meta.type.object.graphql
##                    ^  punctuation.operation.graphql
    id: ID!
##  ^^^ ^^^  meta.type.interface.graphql
##  ^^^ ^^^  meta.type.object.graphql
##  ^^       variable.graphql
##    ^      punctuation.colon.graphql
##      ^^   support.type.builtin.graphql
##        ^  keyword.operator.nulltype.graphql
    name: String!
##  ^^^^^ ^^^^^^^  meta.type.interface.graphql
##  ^^^^^ ^^^^^^^  meta.type.object.graphql
##  ^^^^           variable.graphql
##      ^          punctuation.colon.graphql
##        ^^^^^^   support.type.builtin.graphql
##              ^  keyword.operator.nulltype.graphql
    friends: [Character]
##  ^^^^^^^^ ^^^^^^^^^^^  meta.type.interface.graphql
##  ^^^^^^^^ ^^^^^^^^^^^  meta.type.object.graphql
##  ^^^^^^^               variable.graphql
##         ^              punctuation.colon.graphql
##           ^^^^^^^^^^^  meta.type.list.graphql
##           ^         ^  meta.brace.squart.graphql
##            ^^^^^^^^^   support.type.graphql
    appearsIn: [Episode]!
##  ^^^^^^^^^^ ^^^^^^^^^^  meta.type.interface.graphql
##  ^^^^^^^^^^ ^^^^^^^^^^  meta.type.object.graphql
##  ^^^^^^^^^              variable.graphql
##           ^             punctuation.colon.graphql
##             ^^^^^^^^^^  meta.type.list.graphql
##             ^       ^   meta.brace.squart.graphql
##              ^^^^^^^    support.type.graphql
##                      ^  keyword.operator.nulltype.graphql
  }
##^  meta.type.interface.graphql
##^  meta.type.object.graphql
##^  punctuation.operation.graphql

  schema {
##^^^^^^    keyword.schema.graphql
##       ^  punctuation.operation.graphql
     widget: Widget
##   ^^^^^^          variable.arguments.graphql
##         ^         punctuation.colon.graphql
##           ^^^^^^  support.type.graphql
   }
## ^  punctuation.operation.graphql

  type Starship  implements Character {
##^^^^ ^^^^^^^^  ^^^^^^^^^^ ^^^^^^^^^ ^  meta.type.interface.graphql
##^^^^                                   keyword.type.graphql
##     ^^^^^^^^             ^^^^^^^^^    support.type.graphql
##               ^^^^^^^^^^              keyword.implements.grapahql
##                                    ^  meta.type.object.graphql
##                                    ^  punctuation.operation.graphql
    id: ID!
##  ^^^ ^^^  meta.type.interface.graphql
##  ^^^ ^^^  meta.type.object.graphql
##  ^^       variable.graphql
##    ^      punctuation.colon.graphql
##      ^^   support.type.builtin.graphql
##        ^  keyword.operator.nulltype.graphql
    name: String!
##  ^^^^^ ^^^^^^^  meta.type.interface.graphql
##  ^^^^^ ^^^^^^^  meta.type.object.graphql
##  ^^^^           variable.graphql
##      ^          punctuation.colon.graphql
##        ^^^^^^   support.type.builtin.graphql
##              ^  keyword.operator.nulltype.graphql
    length(unit: LengthUnit = METER): Float
##  ^^^^^^^^^^^^ ^^^^^^^^^^ ^ ^^^^^^^ ^^^^^  meta.type.interface.graphql
##  ^^^^^^^^^^^^ ^^^^^^^^^^ ^ ^^^^^^^ ^^^^^  meta.type.object.graphql
##  ^^^^^^ ^^^^                              variable.graphql
##        ^                        ^         meta.brace.round.graphql
##         ^^^^^ ^^^^^^^^^^ ^ ^^^^^          meta.variables.graphql
##             ^                    ^        punctuation.colon.graphql
##               ^^^^^^^^^^                  support.type.graphql
##                          ^                punctuation.assignment.graphql
##                            ^^^^^          constant.character.enum.graphql
##                                    ^^^^^  support.type.builtin.graphql
   }
## ^  meta.type.interface.graphql
## ^  meta.type.object.graphql
## ^  punctuation.operation.graphql
   input Starship {
## ^^^^^ ^^^^^^^^ ^  meta.type.interface.graphql
## ^^^^^             keyword.input.graphql
##       ^^^^^^^^    support.type.graphql
##                ^  meta.type.object.graphql
##                ^  punctuation.operation.graphql
    id: ID!
##  ^^^ ^^^  meta.type.interface.graphql
##  ^^^ ^^^  meta.type.object.graphql
##  ^^       variable.graphql
##    ^      punctuation.colon.graphql
##      ^^   support.type.builtin.graphql
##        ^  keyword.operator.nulltype.graphql
    name: String!
##  ^^^^^ ^^^^^^^  meta.type.interface.graphql
##  ^^^^^ ^^^^^^^  meta.type.object.graphql
##  ^^^^           variable.graphql
##      ^          punctuation.colon.graphql
##        ^^^^^^   support.type.builtin.graphql
##              ^  keyword.operator.nulltype.graphql
    length(unit: LengthUnit = METER): Float
##  ^^^^^^^^^^^^ ^^^^^^^^^^ ^ ^^^^^^^ ^^^^^  meta.type.interface.graphql
##  ^^^^^^^^^^^^ ^^^^^^^^^^ ^ ^^^^^^^ ^^^^^  meta.type.object.graphql
##  ^^^^^^ ^^^^                              variable.graphql
##        ^                        ^         meta.brace.round.graphql
##         ^^^^^ ^^^^^^^^^^ ^ ^^^^^          meta.variables.graphql
##             ^                    ^        punctuation.colon.graphql
##               ^^^^^^^^^^                  support.type.graphql
##                          ^                punctuation.assignment.graphql
##                            ^^^^^          constant.character.enum.graphql
##                                    ^^^^^  support.type.builtin.graphql
  }
##^  meta.type.interface.graphql
##^  meta.type.object.graphql
##^  punctuation.operation.graphql
   enum Episode {
## ^^^^ ^^^^^^^ ^  meta.enum.graphql
## ^^^^            keyword.enum.graphql
##      ^^^^^^^    support.type.enum.graphql
##              ^  meta.type.object.graphql
##              ^  punctuation.operation.graphql
    NEWHOPE
##  ^^^^^^^  meta.enum.graphql
##  ^^^^^^^  meta.type.object.graphql
##  ^^^^^^^  constant.character.enum.graphql
    EMPIRE
##  ^^^^^^  meta.enum.graphql
##  ^^^^^^  meta.type.object.graphql
##  ^^^^^^  constant.character.enum.graphql
    JEDI
##  ^^^^  meta.enum.graphql
##  ^^^^  meta.type.object.graphql
##  ^^^^  constant.character.enum.graphql
   }
## ^  meta.enum.graphql
## ^  meta.type.object.graphql
## ^  punctuation.operation.graphql

  scalar Date
##^^^^^^       keyword.scalar.graphql
##       ^^^^  entity.scalar.graphql
  union SearchResult = Human # maybe spans
##^^^^^                                     keyword.union.graphql
##      ^^^^^^^^^^^^   ^^^^^                support.type.graphql
##                   ^                      punctuation.assignment.graphql
##                           ^ ^^^^^ ^^^^^  comment.line.graphql.js
##                           ^              punctuation.definition.comment.graphql
    | Droid # more
##  ^               punctuation.or.graphql
##    ^^^^^         support.type.graphql
##          ^ ^^^^  comment.line.graphql.js
##          ^       punctuation.definition.comment.graphql
    | Starship #than one line
##  ^                          punctuation.or.graphql
##    ^^^^^^^^                 support.type.graphql
##             ^^^^^ ^^^ ^^^^  comment.line.graphql.js
##             ^               punctuation.definition.comment.graphql

  mutation {}
##^^^^^^^^     keyword.operation.graphql
##         ^^  meta.selectionset.graphql
##         ^^  punctuation.operation.graphql
  fragment FragmentName on Type @directives() {
##^^^^^^^^ ^^^^^^^^^^^^ ^^ ^^^^ ^^^^^^^^^^^^^ ^  meta.fragment.graphql
##^^^^^^^^                                       keyword.fragment.graphql
##         ^^^^^^^^^^^^                          entity.name.fragment.graphql
##                      ^^                       keyword.on.graphql
##                         ^^^^                  support.type.graphql
##                              ^^^^^^^^^^^      entity.name.function.directive.graphql
##                                         ^^    meta.arguments.graphql
##                                         ^^    meta.brace.round.directive.graphql
##                                            ^  meta.selectionset.graphql
##                                            ^  punctuation.operation.graphql

  }
##^  meta.fragment.graphql
##^  meta.selectionset.graphql
##^  punctuation.operation.graphql

  query
##^^^^^  keyword.operation.graphql
    queryName(
##  ^^^^^^^^^   entity.name.function.graphql
##           ^  meta.brace.round.graphql
      # comment
##    ^ ^^^^^^^  comment.line.graphql.js
##    ^          punctuation.definition.comment.graphql
      $int: = 0
##    ^^^^^ ^ ^  meta.variables.graphql
##    ^^^^       variable.graphql
##        ^      punctuation.colon.graphql
##          ^    punctuation.assignment.graphql
##            ^  constant.float.graphql
      $float: f = 123.011e-1, $float:  f = 123.00, $float: f = 123e+20
##    ^^^^^^^ ^ ^ ^^^^^^^^^^^ ^^^^^^^  ^ ^ ^^^^^^^ ^^^^^^^ ^ ^ ^^^^^^^  meta.variables.graphql
##    ^^^^^^                  ^^^^^^               ^^^^^^               variable.graphql
##            ^                        ^                   ^            support.type.graphql
##              ^                        ^                   ^          punctuation.assignment.graphql
##                ^^^^^^^^^^               ^^^^^^              ^^^^^^^  constant.float.graphql
##                          ^                    ^                      punctuation.comma.graphql
##                                  ^                    ^              punctuation.colon.graphql
      $boolean: b ! = true, $boolean: b = false
##    ^^^^^^^^^ ^ ^ ^ ^^^^^ ^^^^^^^^^ ^ ^ ^^^^^  meta.variables.graphql
##    ^^^^^^^^              ^^^^^^^^             variable.graphql
##              ^                     ^          support.type.graphql
##                ^                              keyword.operator.nulltype.graphql
##                  ^                   ^        punctuation.assignment.graphql
##                    ^^^^                ^^^^^  constant.boolean.graphql
##                        ^                      punctuation.comma.graphql
##                                  ^            punctuation.colon.graphql
      $String: s = "Some string \" \\ \/ \b \f \r \r and the rest"
##    ^^^^^^^^ ^ ^ ^^^^^ ^^^^^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^^ ^^^ ^^^^^  meta.variables.graphql
##    ^^^^^^^                                                       variable.graphql
##             ^                                                    support.type.graphql
##               ^                                                  punctuation.assignment.graphql
##                 ^^^^^ ^^^^^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^^ ^^^ ^^^^^  string.quoted.double.graphql
##                 ^                                                punctuation.definition.string.begin.graphql
##                              ^^ ^^ ^^ ^^ ^^ ^^ ^^                constant.character.escape.graphql
##                                                               ^  punctuation.definition.string.end.graphql
      $enum: e = aaaa, $enum: e = AAAA_AA
##    ^^^^^^ ^ ^ ^^^^^ ^^^^^^ ^ ^ ^^^^^^^  meta.variables.graphql
##    ^^^^^            ^^^^^               variable.graphql
##           ^                ^            support.type.graphql
##             ^                ^          punctuation.assignment.graphql
##               ^^^^             ^^^^^^^  constant.character.enum.graphql
##                   ^                     punctuation.comma.graphql
##                          ^              punctuation.colon.graphql
      $list :  [ String!, Boolean!, ID, Int, Float ] ! = ["aaa", 1 , aFlag]
##    ^^^^^ ^  ^ ^^^^^^^^ ^^^^^^^^^ ^^^ ^^^^ ^^^^^ ^ ^ ^ ^^^^^^^ ^ ^ ^^^^^^  meta.variables.graphql
##    ^^^^^                                                                  variable.graphql
##             ^ ^^^^^^^^ ^^^^^^^^^ ^^^ ^^^^ ^^^^^ ^ ^                       meta.type.list.graphql
##             ^                                   ^                         meta.brace.squart.graphql
##               ^^^^^^   ^^^^^^^   ^^  ^^^  ^^^^^                           support.type.builtin.graphql
##                     ^         ^                   ^                       keyword.operator.nulltype.graphql
##                      ^         ^   ^    ^                                 punctuation.comma.graphql
##                                                     ^                     punctuation.assignment.graphql
##                                                       ^^^^^^^ ^ ^ ^^^^^^  meta.listvalues.graphql
##                                                       ^                ^  meta.brace.square.graphql
##                                                        ^^^^^              string.quoted.double.graphql
##                                                        ^                  punctuation.definition.string.begin.graphql
##                                                            ^              punctuation.definition.string.end.graphql
##                                                               ^           constant.float.graphql
##                                                                   ^^^^^   constant.character.enum.graphql
      $object: o = {
##    ^^^^^^^^ ^ ^ ^  meta.variables.graphql
##    ^^^^^^^         variable.graphql
##             ^      support.type.graphql
##               ^    punctuation.assignment.graphql
##                 ^  meta.objectvalues.graphql
##                 ^  meta.brace.curly.graphql
        lon: 12.43, lat: -53.211
##      ^^^^ ^^^^^^ ^^^^ ^^^^^^^  meta.variables.graphql
##      ^^^^ ^^^^^^ ^^^^ ^^^^^^^  meta.objectvalues.graphql
##      ^^^         ^^^           constant.object.key.graphql
##      ^^^         ^^^           string.unquoted.graphql
##         ^           ^          punctuation.graphql
##           ^^^^^       ^^^^^^^  constant.float.graphql
      }
##    ^  meta.variables.graphql
##    ^  meta.objectvalues.graphql
##    ^  meta.brace.curly.graphql
    )
##  ^  meta.brace.round.graphql
    @directives (
##  ^^^^^^^^^^^    entity.name.function.directive.graphql
##              ^  meta.arguments.graphql
##              ^  meta.brace.round.directive.graphql
      number: 1
##    ^^^^^^^ ^  meta.arguments.graphql
##    ^^^^^^     variable.arguments.graphql
##          ^    punctuation.colon.graphql
##            ^  constant.float.graphql
      float: 123.011e-1, float:123.00, float: 123e+20
##    ^^^^^^ ^^^^^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^ ^^^^^^^  meta.arguments.graphql
##    ^^^^^              ^^^^^         ^^^^^           variable.arguments.graphql
##         ^                  ^             ^          punctuation.colon.graphql
##           ^^^^^^^^^^        ^^^^^^         ^^^^^^^  constant.float.graphql
##                     ^             ^                 punctuation.comma.graphql
      boolean: true, boolean: false
##    ^^^^^^^^ ^^^^^ ^^^^^^^^ ^^^^^  meta.arguments.graphql
##    ^^^^^^^        ^^^^^^^         variable.arguments.graphql
##           ^              ^        punctuation.colon.graphql
##             ^^^^           ^^^^^  constant.boolean.graphql
##                 ^                 punctuation.comma.graphql
      String: "Some string \" \\ \/ \b \f \r \r and the rest",
##    ^^^^^^^ ^^^^^ ^^^^^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^^ ^^^ ^^^^^^  meta.arguments.graphql
##    ^^^^^^                                                    variable.arguments.graphql
##          ^                                                   punctuation.colon.graphql
##            ^^^^^ ^^^^^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^ ^^^ ^^^ ^^^^^   string.quoted.double.graphql
##            ^                                                 punctuation.definition.string.begin.graphql
##                         ^^ ^^ ^^ ^^ ^^ ^^ ^^                 constant.character.escape.graphql
##                                                          ^   punctuation.definition.string.end.graphql
##                                                           ^  punctuation.comma.graphql
      enum: aaaa, enum: AAAA_AA,
##    ^^^^^ ^^^^^ ^^^^^ ^^^^^^^^  meta.arguments.graphql
##    ^^^^        ^^^^            variable.arguments.graphql
##        ^           ^           punctuation.colon.graphql
##          ^^^^        ^^^^^^^   constant.character.enum.graphql
##              ^              ^  punctuation.comma.graphql
      list : ["aaa", 1 , aFlag],
##    ^^^^ ^ ^^^^^^^ ^ ^ ^^^^^^^  meta.arguments.graphql
##    ^^^^                        variable.arguments.graphql
##         ^                      punctuation.colon.graphql
##           ^^^^^^^ ^ ^ ^^^^^^   meta.listvalues.graphql
##           ^                ^   meta.brace.square.graphql
##            ^^^^^               string.quoted.double.graphql
##            ^                   punctuation.definition.string.begin.graphql
##                ^               punctuation.definition.string.end.graphql
##                   ^            constant.float.graphql
##                       ^^^^^    constant.character.enum.graphql
##                             ^  punctuation.comma.graphql
      object: {
##    ^^^^^^^ ^  meta.arguments.graphql
##    ^^^^^^     variable.arguments.graphql
##          ^    punctuation.colon.graphql
##            ^  meta.objectvalues.graphql
##            ^  meta.brace.curly.graphql
        lon: 12.43, lat: -53.211
##      ^^^^ ^^^^^^ ^^^^ ^^^^^^^  meta.arguments.graphql
##      ^^^^ ^^^^^^ ^^^^ ^^^^^^^  meta.objectvalues.graphql
##      ^^^         ^^^           constant.object.key.graphql
##      ^^^         ^^^           string.unquoted.graphql
##         ^           ^          punctuation.graphql
##           ^^^^^       ^^^^^^^  constant.float.graphql
      }
##    ^  meta.arguments.graphql
##    ^  meta.objectvalues.graphql
##    ^  meta.brace.curly.graphql
    )
##  ^  meta.arguments.graphql
##  ^  meta.brace.round.directive.graphql
  {
##^  meta.selectionset.graphql
##^  punctuation.operation.graphql
    # Selection Set
##  ^ ^^^^^^^^^ ^^^  meta.selectionset.graphql
##  ^ ^^^^^^^^^ ^^^  comment.line.graphql.js
##  ^                punctuation.definition.comment.graphql
    me {
##  ^^ ^  meta.selectionset.graphql
##  ^^    variable.alias.graphql
##     ^  punctuation.operation.graphql
      # nested Selection Set
##    ^ ^^^^^^ ^^^^^^^^^ ^^^  meta.selectionset.graphql
##    ^ ^^^^^^ ^^^^^^^^^ ^^^  comment.line.graphql.js
##    ^                       punctuation.definition.comment.graphql
      id: idAlias(id: 1) @directive() # fields
##    ^^^ ^^^^^^^^^^^ ^^ ^^^^^^^^^^^^ ^ ^^^^^^  meta.selectionset.graphql
##    ^^^                                       string.unquoted.key.graphql
##      ^           ^                           punctuation.colon.graphql
##        ^^^^^^^                               variable.alias.graphql
##               ^^^^ ^^           ^^           meta.arguments.graphql
##               ^     ^           ^^           meta.brace.round.directive.graphql
##                ^^                            variable.arguments.graphql
##                    ^                         constant.float.graphql
##                       ^^^^^^^^^^             entity.name.function.directive.graphql
##                                    ^ ^^^^^^  comment.line.graphql.js
##                                    ^         punctuation.definition.comment.graphql
      name,
##    ^^^^^  meta.selectionset.graphql
##    ^^^^   variable.alias.graphql
##        ^  punctuation.comma.graphql
      small: profilePic( size: $devicePicSize ) # field alias
##    ^^^^^^ ^^^^^^^^^^^ ^^^^^ ^^^^^^^^^^^^^^ ^ ^ ^^^^^ ^^^^^  meta.selectionset.graphql
##    ^^^^^^                                                   string.unquoted.key.graphql
##         ^                 ^                                 punctuation.colon.graphql
##           ^^^^^^^^^^                                        variable.alias.graphql
##                     ^ ^^^^^ ^^^^^^^^^^^^^^ ^                meta.arguments.graphql
##                     ^                      ^                meta.brace.round.directive.graphql
##                       ^^^^                                  variable.arguments.graphql
##                             ^^^^^^^^^^^^^^                  variable.graphql
##                                              ^ ^^^^^ ^^^^^  comment.line.graphql.js
##                                              ^              punctuation.definition.comment.graphql
      ...Ignored
##    ^^^^^^^^^^  meta.selectionset.graphql
##    ^^^         keyword.operator.spread.graphql
##       ^^^^^^^  variable.fragment.graphql
      ...A @directives(if: true), # fragment spread
##    ^^^^ ^^^^^^^^^^^^^^^ ^^^^^^ ^ ^^^^^^^^ ^^^^^^  meta.selectionset.graphql
##    ^^^                                            keyword.operator.spread.graphql
##       ^                                           variable.fragment.graphql
##         ^^^^^^^^^^^                               entity.name.function.directive.graphql
##                    ^^^^ ^^^^^                     meta.arguments.graphql
##                    ^        ^                     meta.brace.round.directive.graphql
##                     ^^                            variable.arguments.graphql
##                       ^                           punctuation.colon.graphql
##                         ^^^^                      constant.boolean.graphql
##                              ^                    punctuation.comma.graphql
##                                ^ ^^^^^^^^ ^^^^^^  comment.line.graphql.js
##                                ^                  punctuation.definition.comment.graphql
      ... on Type  @directives() { # inline fragment
##    ^^^ ^^ ^^^^  ^^^^^^^^^^^^^ ^ ^ ^^^^^^ ^^^^^^^^  meta.selectionset.graphql
##    ^^^                                             keyword.operator.spread.graphql
##        ^^                                          keyword.on.graphql
##           ^^^^                                     support.type.graphql
##                 ^^^^^^^^^^^                        entity.name.function.directive.graphql
##                            ^^                      meta.arguments.graphql
##                            ^^                      meta.brace.round.directive.graphql
##                               ^                    punctuation.operation.graphql
##                                 ^ ^^^^^^ ^^^^^^^^  comment.line.graphql.js
##                                 ^                  punctuation.definition.comment.graphql
        ...{ # inline fragment
##      ^^^^ ^ ^^^^^^ ^^^^^^^^  meta.selectionset.graphql
##      ^^^                     keyword.operator.spread.graphql
##         ^                    punctuation.operation.graphql
##           ^ ^^^^^^ ^^^^^^^^  comment.line.graphql.js
##           ^                  punctuation.definition.comment.graphql
        }
##      ^  meta.selectionset.graphql
##      ^  punctuation.operation.graphql
      }
##    ^  meta.selectionset.graphql
##    ^  punctuation.operation.graphql
    }
##  ^  meta.selectionset.graphql
##  ^  punctuation.operation.graphql
  }
##^  meta.selectionset.graphql
##^  punctuation.operation.graphql
`
##  >> only:source.js.jsx
