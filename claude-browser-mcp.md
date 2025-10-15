# Claude Browser MCP Context

This file provides specialized knowledge and optimized approaches for browser automation tasks using the Browser MCP server.

## Mission
As a browser automation expert, complete quiz questions efficiently using systematic analysis and domain-specific knowledge while minimizing token usage.

## Analysis Process

### 1. Question Assessment
- **Take screenshot** to see full question and all options clearly
- **Identify question type**:
  - Single answer (radio buttons)
  - Multiple answers (checkboxes)
  - Confirmation dialogs

### 2. Apply Domain Knowledge
Refer to the knowledge base below before making decisions.

### 3. Verification Strategy
- **For basic concepts**: Trust existing knowledge (networking, programming fundamentals)
- **For uncertain technical details**: Use WebSearch for reliable sources
- **For quiz-specific patterns**: Apply domain knowledge systematically

### 4. Answer Selection
- **Single answer (radio buttons)**: Single click
- **Multiple answers (checkboxes)**: Single click each correct option
- **Verify selection**: Ensure correct answers are selected before proceeding

### 5. Navigation
- Click "Next" button to proceed to next question
- Handle confirmation dialogs promptly
- Continue until quiz completion

## Browser Interaction Protocol

### Tool Usage Optimization
- **Screenshot first**: Read visual content and questions with all options simultaneously
- **Snapshot only when needed**: Get element references for clicking
- **Never use both**: Screenshot OR snapshot, not both for same question
- **Batch calls**: Combine click + navigation operations in single message
- **Text extraction**: Parse exact option text from snapshots vs paraphrasing from screenshots

### Element Interaction
- Use `mcp__browsermcp__browser_snapshot` to get element references
- Click using proper refs in format `s<number>e<number>`
- Handle stale references by regenerating snapshots

### Task Tracking
- Use TodoWrite for high-level progress only (groups of 5-10 questions)
- Track overall completion, not micro-steps like individual clicks
- Update status as major milestones are reached
- Avoid frequent todo updates to minimize token usage

## Networking Quiz Knowledge Base

### Ethernet Standards
- **1000BaseT**: 100m max distance over Cat5e/6 UTP
- **100BaseTX**: 2 wire pairs, Cat5/5e/6, 100m max
- **10Base2**: 10 Mbps baseband, thin coax, ~185m max
- **10GBaseLR**: Long range fiber, ~10km
- **10GBaseSR**: Short range fiber, ~300m
- **10GBaseER**: Extended range fiber, ~40km

### Network Concepts
- **Baseband**: Single signal uses entire bandwidth (vs broadband)
- **Full-duplex**: Simultaneous send/receive, doubles throughput
- **Half-duplex**: One direction at a time (hubs, CSMA/CD)
- **Collision domain**: All devices must listen when one transmits
- **Broadcast domain**: Logical network division for broadcasts
- **CSMA/CD**: Media access control method preventing collisions

### Technical Conversions
- **Binary to Hex**: 1111₂ = F₁₆, 1010₂ = A₁₆
- **Binary to Decimal**: 11101000₂ = 232₁₀
- **MAC Address**: 48 bits (6 bytes)
- **IEEE Standards**: 802.3bq = 40GBaseT, 1901 = Powerline

### Common Mistakes
- Confusing collision vs broadcast domains
- Wrong distance specifications for fiber standards
- Mixing up wire pair counts (2 for 100BaseTX, 4 for 1000BaseT)
- Incorrect conversion calculations

## Error Prevention

1. **Read questions carefully**: Distinguish between syntax and behavior questions
2. **Parse options precisely**: Extract exact text from snapshots, don't paraphrase
3. **Apply domain knowledge**: Use networking fundamentals before researching
4. **Verify calculations**: Double-check binary/hex conversions systematically
5. **Eliminate wrong answers**: Consider all options methodically
6. **Confirm selections**: Ensure correct options are selected before proceeding
7. **Handle dialogs**: Respond to confirmations promptly

## Optimization Strategy

### Streamlined Workflow
1. **Screenshot** → Read question + all options simultaneously
2. **Apply knowledge** → Direct decision from domain expertise
3. **Snapshot + Click + Next** → Batch operations in single message
4. **Minimal analysis** → Skip verbose explanations during automation
5. **Strategic verification** → Use WebSearch only for uncertain technical details

## Browser MCP Connection

If browser connection fails:
1. User must click Browser MCP extension icon in toolbar
2. Click "Connect" button to establish connection
3. Then proceed with automation tasks

This systematic approach maximizes accuracy while minimizing token usage through focused domain knowledge and efficient tool usage.