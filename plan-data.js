const LC = s => `https://leetcode.com/problems/${s}/`;
const BFE = s => `https://bigfrontend.dev/quiz/${s}`;

// Each task: {id, label, url, diff?}  — id must be stable & unique
const PLAN = [
  { week:1, wtitle:"Week 1 — JS Output-Based + Arrays/Hashing DSA",
    wsub:"All 9 RoadsideCoder JS topics with bigfrontend.dev quiz practice, plus arrays/hashing/two-pointer DSA.",
    days:[
      { day:1, sections:[
        {label:"JS — var, let, const", note:"Watch video, then do the quizzes.", items:[
          {id:"js1v", label:"Video: var/let/const (RoadsideCoder)", url:"https://www.youtube.com/watch?v=oUWRxJ19gfE&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=1"},
          {id:"js1q1", label:"Quiz: var vs let", url:BFE("var-vs-let")},
          {id:"js1q2", label:"Quiz: let", url:BFE("let")},
          {id:"js1q3", label:"Quiz: var", url:BFE("var")},
          {id:"js1q4", label:"Quiz: const", url:BFE("const")},
          {id:"js1q5", label:"Quiz: scope", url:BFE("block-scope-1")},
        ]},
        {label:"DSA", items:[
          {id:"d_twosum", label:"Two Sum", url:LC("two-sum"), diff:"Easy"},
          {id:"d_contdup", label:"Contains Duplicate", url:LC("contains-duplicate"), diff:"Easy"},
        ]},
      ]},
      { day:2, sections:[
        {label:"JS — map, filter, reduce (polyfills)", items:[
          {id:"js2v", label:"Video: map/filter/reduce polyfills", url:"https://www.youtube.com/watch?v=dGq0gi0wv64&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=2"},
          {id:"js2q1", label:"Quiz: reduce", url:BFE("reduce")},
          {id:"js2q2", label:"Quiz: Array I", url:BFE("Array-I")},
          {id:"js2q3", label:"Quiz: array keys", url:BFE("array-keys")},
          {id:"js2q4", label:"Quiz: largest Array index", url:BFE("largest-Array-index")},
          {id:"js2q5", label:"Quiz: Array length", url:BFE("array-length")},
          {id:"js2q6", label:"Quiz: push unshift", url:BFE("push-unshift")},
          {id:"js2q7", label:"Quiz: sparse array", url:BFE("sparse-array")},
        ]},
        {label:"DSA", items:[
          {id:"d_anagram", label:"Valid Anagram", url:LC("valid-anagram"), diff:"Easy"},
          {id:"d_grpanag", label:"Group Anagrams", url:LC("group-anagrams"), diff:"Medium"},
        ]},
      ]},
      { day:3, sections:[
        {label:"JS — Hoisting, Scope, Callbacks, Arrow Fns", items:[
          {id:"js3v", label:"Video: Hoisting/Scope/Callbacks/Arrow", url:"https://www.youtube.com/watch?v=btwFJT_xzdg&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=4"},
          {id:"js3q1", label:"Quiz: Hoisting I", url:BFE("Hoisting-I")},
          {id:"js3q2", label:"Quiz: Hoisting II", url:BFE("Hoisting-II")},
          {id:"js3q3", label:"Quiz: Hoisting III", url:BFE("Hoisting-III")},
          {id:"js3q4", label:"Quiz: Hoisting IIII", url:BFE("Hoisting-IIII")},
          {id:"js3q5", label:"Quiz: Hoisting V", url:BFE("hoisting-v")},
          {id:"js3q6", label:"Quiz: Hoisting VI", url:BFE("Hoisting-VI")},
          {id:"js3q7", label:"Quiz: Arrow Function", url:BFE("6-Arrow-Function")},
          {id:"js3q8", label:"Quiz: Arrow Function II", url:BFE("Arrow-Function-II")},
        ]},
        {label:"DSA", items:[
          {id:"d_topk", label:"Top K Frequent Elements", url:LC("top-k-frequent-elements"), diff:"Medium"},
        ]},
      ]},
      { day:4, sections:[
        {label:"JS — Closures, Lexical Scope", note:"BFE has only ~6 closure quizzes — short list on purpose.", items:[
          {id:"js4v", label:"Video: Closures & Lexical Scope", url:"https://www.youtube.com/watch?v=sZjlEKbaykc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=5"},
          {id:"js4q1", label:"Quiz: closure", url:BFE("closure-1")},
          {id:"js4q2", label:"Quiz: function", url:BFE("function")},
          {id:"js4q3", label:"Quiz: Function name", url:BFE("Function-name")},
          {id:"js4q4", label:"Quiz: Function II", url:BFE("function-ii")},
          {id:"js4q5", label:"Quiz: name for Function expression", url:BFE("name-for-Function-expression")},
          {id:"js4q6", label:"Quiz: arguments", url:BFE("arguments")},
        ]},
        {label:"DSA", items:[
          {id:"d_prodself", label:"Product of Array Except Self", url:LC("product-of-array-except-self"), diff:"Medium"},
          {id:"d_subarraysum", label:"Subarray Sum Equals K — prefix sum", url:LC("subarray-sum-equals-k"), diff:"Medium"},
        ]},
      ]},
      { day:5, sections:[
        {label:"JS — 'this', Binding", items:[
          {id:"js5v", label:"Video: 'this' & Binding", url:"https://www.youtube.com/watch?v=rv7Q11KWmKU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=8"},
          {id:"js5q1", label:"Quiz: this", url:BFE("this")},
          {id:"js5q2", label:"Quiz: this II", url:BFE("this-II")},
          {id:"js5q3", label:"Quiz: this III", url:BFE("this-III")},
          {id:"js5q4", label:"Quiz: this IV", url:BFE("this-4")},
          {id:"js5q5", label:"Quiz: this V", url:BFE("this-V")},
          {id:"js5q6", label:"Quiz: this VI", url:BFE("this-VI")},
          {id:"js5q7", label:"Quiz: this VII", url:BFE("this-VII")},
          {id:"js5q8", label:"Quiz: method", url:BFE("method")},
          {id:"js5q9", label:"Quiz: strict", url:BFE("strict")},
          {id:"js5q10", label:"Quiz: constructor", url:BFE("constructor")},
        ]},
        {label:"DSA", items:[
          {id:"d_longcons", label:"Longest Consecutive Sequence", url:LC("longest-consecutive-sequence"), diff:"Medium"},
        ]},
      ]},
      { day:6, sections:[
        {label:"JS — call, apply, bind", note:"No direct call/apply/bind quizzes on BFE — these are adjacent. Best practice: hand-write the polyfills.", items:[
          {id:"js6v", label:"Video: call/apply/bind", url:"https://www.youtube.com/watch?v=VkmUOktYDAU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=9"},
          {id:"js6q1", label:"Quiz: Function call", url:BFE("Function-call")},
          {id:"js6q2", label:"Quiz: instanceOf", url:BFE("instanceOf")},
          {id:"js6q3", label:"Quiz: Inheritance", url:BFE("Inheritance")},
        ]},
        {label:"JS — Promises, Promise methods, async/await", items:[
          {id:"js7v", label:"Video: Promises & async/await", url:"https://www.youtube.com/watch?v=HaJdoFp2OEc&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=11"},
          {id:"js7q1", label:"Quiz: Promise order", url:BFE("1-promise-order")},
          {id:"js7q2", label:"Quiz: Promise executor", url:BFE("2-promise-executor")},
          {id:"js7q3", label:"Quiz: Promise then callbacks", url:BFE("3-promise-then-callbacks")},
          {id:"js7q4", label:"Quiz: Promise.all()", url:BFE("Promise-all")},
          {id:"js7q5", label:"Quiz: async await", url:BFE("async-await")},
        ]},
        {label:"DSA", items:[
          {id:"d_validpal", label:"Valid Palindrome", url:LC("valid-palindrome"), diff:"Easy"},
        ]},
      ]},
      { day:7, sections:[
        {label:"JS — Debounce, Throttle", note:"Implementation skill, not a quiz — hand-code both, timed.", items:[
          {id:"js8v", label:"Video: Debounce & Throttle", url:"https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=12"},
          {id:"js8q1", label:"Quiz: setTimeout(0ms)", url:BFE("setTimeout-0ms")},
          {id:"js8q2", label:"Quiz: setTimeout II", url:BFE("setTimeout-2")},
          {id:"js8q3", label:"Quiz: requestAnimationFrame", url:BFE("requestanimationframe")},
        ]},
        {label:"JS — Event Propagation, Bubbling, Capturing", note:"No matching BFE quizzes — build a 3-nested-div demo and predict console.log order for bubble/capture/stopPropagation.", items:[
          {id:"js9v", label:"Video: Event Propagation", url:"https://www.youtube.com/watch?v=rS_4YfbEo2U&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=13"},
        ]},
        {label:"DSA", items:[
          {id:"d_3sum", label:"3Sum", url:LC("3sum"), diff:"Medium"},
        ]},
      ]},
      { day:8, sections:[
        {label:"JS — Other Polyfills (JSON.stringify, instanceOf, Object methods)", items:[
          {id:"js10v", label:"Video: Other Polyfills", url:"https://www.youtube.com/watch?v=Th3rZjfKKhI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=14"},
          {id:"js10q1", label:"Quiz: JSON.stringify()", url:BFE("json-stringify")},
          {id:"js10q2", label:"Quiz: JSON.stringify() II", url:BFE("json-stringify-ii")},
          {id:"js10q3", label:"Quiz: instanceOf 2", url:BFE("instanceOf-2")},
          {id:"js10q4", label:"Quiz: typeof", url:BFE("typeof")},
          {id:"js10q5", label:"Quiz: Object.keys()", url:BFE("object-keys")},
          {id:"js10q6", label:"Quiz: toString", url:BFE("tostring")},
          {id:"js10q7", label:"Quiz: structuredClone()", url:BFE("structuredclone")},
          {id:"js10q8", label:"Quiz: Prototype", url:BFE("prototype")},
        ]},
        {label:"DSA", items:[
          {id:"d_container", label:"Container With Most Water", url:LC("container-with-most-water"), diff:"Medium"},
          {id:"d_rainwater", label:"Trapping Rain Water", url:LC("trapping-rain-water"), diff:"Hard"},
        ]},
      ]},
    ]},

  { week:2, wtitle:"Week 2 — Sliding Window / Stack / Binary Search / Linked List + Machine Coding B1",
    wsub:"DSA core patterns + first 5 machine-coding builds (45–60 min each, vanilla React).",
    days:[
      { day:9, sections:[
        {label:"DSA", items:[
          {id:"d_stock", label:"Best Time to Buy and Sell Stock", url:LC("best-time-to-buy-and-sell-stock"), diff:"Easy"},
          {id:"d_longsub", label:"Longest Substring Without Repeating Characters", url:LC("longest-substring-without-repeating-characters"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_star", label:"Star Rating — controlled, hover-preview, keyboard + aria a11y"},
        ]},
      ]},
      { day:10, sections:[
        {label:"DSA", items:[
          {id:"d_slidmax", label:"Sliding Window Maximum", url:LC("sliding-window-maximum"), diff:"Hard"},
          {id:"d_validparen", label:"Valid Parentheses", url:LC("valid-parentheses"), diff:"Easy"},
          {id:"d_minstack", label:"Min Stack", url:LC("min-stack"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_accord", label:"Accordion / Collapsible FAQ — single vs multi-open, smooth expand"},
        ]},
      ]},
      { day:11, sections:[
        {label:"DSA", items:[
          {id:"d_rpn", label:"Evaluate Reverse Polish Notation", url:LC("evaluate-reverse-polish-notation"), diff:"Medium"},
          {id:"d_genparen", label:"Generate Parentheses", url:LC("generate-parentheses"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_tabs", label:"Tabs — arrow-key nav, active indicator, lazy content render"},
        ]},
      ]},
      { day:12, sections:[
        {label:"DSA", items:[
          {id:"d_histogram", label:"Largest Rectangle in Histogram", url:LC("largest-rectangle-in-histogram"), diff:"Hard"},
          {id:"d_binsearch", label:"Binary Search", url:LC("binary-search"), diff:"Easy"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_autocomplete", label:"Debounced Autocomplete — debounce, AbortController, keyboard select"},
        ]},
      ]},
      { day:13, sections:[
        {label:"DSA", items:[
          {id:"d_2dmatrix", label:"Search a 2D Matrix", url:LC("search-a-2d-matrix"), diff:"Medium"},
          {id:"d_findmin", label:"Find Minimum in Rotated Sorted Array", url:LC("find-minimum-in-rotated-sorted-array"), diff:"Medium"},
          {id:"d_searchrot", label:"Search in Rotated Sorted Array", url:LC("search-in-rotated-sorted-array"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_modal", label:"Custom Modal — portal, focus trap, Escape/overlay close, scroll lock"},
        ]},
      ]},
      { day:14, sections:[
        {label:"DSA", items:[
          {id:"d_median", label:"Median of Two Sorted Arrays", url:LC("median-of-two-sorted-arrays"), diff:"Hard"},
          {id:"d_revlist", label:"Reverse Linked List", url:LC("reverse-linked-list"), diff:"Easy"},
          {id:"d_mergelist", label:"Merge Two Sorted Lists", url:LC("merge-two-sorted-lists"), diff:"Easy"},
          {id:"d_finddup", label:"Find the Duplicate Number — fast/slow pointer", url:LC("find-the-duplicate-number"), diff:"Medium"},
        ]},
      ]},
      { day:15, sections:[
        {label:"DSA", items:[
          {id:"d_cycle", label:"Linked List Cycle", url:LC("linked-list-cycle"), diff:"Easy"},
          {id:"d_removenth", label:"Remove Nth Node From End of List", url:LC("remove-nth-node-from-end-of-list"), diff:"Medium"},
          {id:"d_addtwo", label:"Add Two Numbers", url:LC("add-two-numbers"), diff:"Medium"},
          {id:"d_lru", label:"LRU Cache", url:LC("lru-cache"), diff:"Medium"},
        ]},
      ]},
    ]},

  { week:3, wtitle:"Week 3 — Trees / Heap / Backtracking + Machine Coding B2",
    wsub:"Tree traversals, heaps, backtracking patterns, plus the second batch of machine-coding builds.",
    days:[
      { day:16, sections:[
        {label:"DSA", items:[
          {id:"d_invert", label:"Invert Binary Tree", url:LC("invert-binary-tree"), diff:"Easy"},
          {id:"d_sametree", label:"Same Tree", url:LC("same-tree"), diff:"Easy"},
          {id:"d_maxdepth", label:"Maximum Depth of Binary Tree", url:LC("maximum-depth-of-binary-tree"), diff:"Easy"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_todo", label:"Todo List with Undo/Redo — history stack, snapshots"},
        ]},
      ]},
      { day:17, sections:[
        {label:"DSA", items:[
          {id:"d_validbst", label:"Validate Binary Search Tree", url:LC("validate-binary-search-tree"), diff:"Medium"},
          {id:"d_levelorder", label:"Binary Tree Level Order Traversal", url:LC("binary-tree-level-order-traversal"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_infinite", label:"Infinite Scroll Feed — IntersectionObserver, no dup fetches"},
        ]},
      ]},
      { day:18, sections:[
        {label:"DSA", items:[
          {id:"d_rightside", label:"Binary Tree Right Side View", url:LC("binary-tree-right-side-view"), diff:"Medium"},
          {id:"d_lca", label:"Lowest Common Ancestor of a BST", url:LC("lowest-common-ancestor-of-a-binary-search-tree"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_pagination", label:"Pagination — page-size control, ellipsis, controlled/uncontrolled"},
        ]},
      ]},
      { day:19, sections:[
        {label:"DSA", items:[
          {id:"d_kthlargest", label:"Kth Largest Element in an Array", url:LC("kth-largest-element-in-an-array"), diff:"Medium"},
          {id:"d_laststone", label:"Last Stone Weight", url:LC("last-stone-weight"), diff:"Easy"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_ttt", label:"Tic-Tac-Toe — win/draw detection, move history, replay"},
        ]},
      ]},
      { day:20, sections:[
        {label:"DSA", items:[
          {id:"d_trie", label:"Implement Trie (Prefix Tree)", url:LC("implement-trie-prefix-tree"), diff:"Medium"},
          {id:"d_subsets", label:"Subsets", url:LC("subsets"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_comments", label:"Nested Comment System — recursive render, reply/collapse per thread"},
        ]},
      ]},
      { day:21, sections:[
        {label:"DSA", items:[
          {id:"d_perms", label:"Permutations", url:LC("permutations"), diff:"Medium"},
          {id:"d_combsum", label:"Combination Sum", url:LC("combination-sum"), diff:"Medium"},
          {id:"d_merge", label:"Merge Intervals — intervals", url:LC("merge-intervals"), diff:"Medium"},
          {id:"d_insertint", label:"Insert Interval — intervals", url:LC("insert-interval"), diff:"Medium"},
        ]},
      ]},
      { day:22, sections:[
        {label:"DSA", items:[
          {id:"d_lettercomb", label:"Letter Combinations of a Phone Number", url:LC("letter-combinations-of-a-phone-number"), diff:"Medium"},
          {id:"d_wordsearch", label:"Word Search", url:LC("word-search"), diff:"Medium"},
          {id:"d_nqueens", label:"N-Queens", url:LC("n-queens"), diff:"Hard"},
        ]},
      ]},
    ]},

  { week:4, wtitle:"Week 4 — Graphs / DP + Machine Coding B3 + TypeScript",
    wsub:"Close out DSA (graphs + dynamic programming), advanced component builds, and TypeScript depth.",
    days:[
      { day:23, sections:[
        {label:"DSA", items:[
          {id:"d_islands", label:"Number of Islands", url:LC("number-of-islands"), diff:"Medium"},
          {id:"d_clonegraph", label:"Clone Graph", url:LC("clone-graph"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_hooks", label:"Custom Hooks Set — useDebounce, useThrottle, useFetch, usePrevious"},
        ]},
      ]},
      { day:24, sections:[
        {label:"DSA", items:[
          {id:"d_course", label:"Course Schedule", url:LC("course-schedule"), diff:"Medium"},
          {id:"d_rotting", label:"Rotting Oranges", url:LC("rotting-oranges"), diff:"Medium"},
        ]},
        {label:"TypeScript", items:[
          {id:"ts_1", label:"Generics + utility types (Partial, Pick, Omit, Record) — practice typing"},
        ]},
      ]},
      { day:25, sections:[
        {label:"DSA", items:[
          {id:"d_netdelay", label:"Network Delay Time", url:LC("network-delay-time"), diff:"Medium"},
          {id:"d_wordladder", label:"Word Ladder", url:LC("word-ladder"), diff:"Hard"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_dnd", label:"Drag-and-Drop List (Kanban) — reorder within/between columns"},
        ]},
      ]},
      { day:26, sections:[
        {label:"DSA", items:[
          {id:"d_climb", label:"Climbing Stairs", url:LC("climbing-stairs"), diff:"Easy"},
          {id:"d_robber", label:"House Robber", url:LC("house-robber"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_explorer", label:"File Explorer Tree — recursive expand/collapse, lazy children, rename/delete"},
        ]},
      ]},
      { day:27, sections:[
        {label:"DSA", items:[
          {id:"d_coin", label:"Coin Change", url:LC("coin-change"), diff:"Medium"},
          {id:"d_maxsub", label:"Maximum Subarray", url:LC("maximum-subarray"), diff:"Medium"},
        ]},
      ]},
      { day:28, sections:[
        {label:"DSA", items:[
          {id:"d_lis", label:"Longest Increasing Subsequence", url:LC("longest-increasing-subsequence"), diff:"Medium"},
          {id:"d_wordbreak", label:"Word Break", url:LC("word-break"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_wizard", label:"Multi-step Form Wizard — step validation, progress bar, preserve state"},
        ]},
      ]},
      { day:29, sections:[
        {label:"DSA", items:[
          {id:"d_uniquepaths", label:"Unique Paths", url:LC("unique-paths"), diff:"Medium"},
          {id:"d_longpal", label:"Longest Palindromic Substring", url:LC("longest-palindromic-substring"), diff:"Medium"},
        ]},
        {label:"Machine Coding", items:[
          {id:"mc_cart", label:"E-commerce Cart — qty update, coupon logic, memoized totals (useMemo)"},
        ]},
      ]},
      { day:30, sections:[
        {label:"DSA", items:[
          {id:"d_editdist", label:"Edit Distance", url:LC("edit-distance"), diff:"Medium"},
        ]},
        {label:"TypeScript", items:[
          {id:"ts_2", label:"Discriminated unions + typing a generic hook/component"},
        ]},
      ]},
    ]},
];
