
// Helper function to generate topic-specific content
export function generateTextContent(topic: string, level: string): string {
  // Normalize the topic to lowercase for comparison
  const normalizedTopic = topic.toLowerCase();
  
  // Generate content based on the topic
  if (normalizedTopic.includes('cloud computing')) {
    return `Cloud computing is a technology that allows users to access and use computing resources (like servers, storage, databases, networking, software) over the internet ("the cloud") instead of owning and maintaining physical infrastructure.

Key characteristics of cloud computing include:
- On-demand self-service: Users can provision resources as needed without human interaction
- Broad network access: Services are available over the network and accessible through standard mechanisms
- Resource pooling: Provider's resources are pooled to serve multiple consumers
- Rapid elasticity: Resources can be scaled up or down quickly based on demand
- Measured service: Resource usage is monitored, controlled, and reported

The main service models are:
1. Infrastructure as a Service (IaaS): Provides virtualized computing resources
2. Platform as a Service (PaaS): Offers hardware and software tools over the internet
3. Software as a Service (SaaS): Delivers software applications over the internet

Popular cloud providers include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform.`;
  } 
  else if (normalizedTopic.includes('artificial intelligence') || normalizedTopic.includes('ai')) {
    return `Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.

Key concepts in AI include:
- Machine Learning: Systems that learn from data without being explicitly programmed
- Neural Networks: Computing systems inspired by the human brain's structure
- Deep Learning: Advanced neural networks with multiple layers
- Natural Language Processing: Enabling computers to understand human language
- Computer Vision: Allowing machines to interpret and process visual information

AI applications are widespread in our daily lives, from virtual assistants like Siri and Alexa to recommendation systems on streaming platforms, autonomous vehicles, fraud detection systems, and medical diagnosis tools.

The field continues to evolve rapidly, with ongoing research in areas like reinforcement learning, generative AI, and ethical AI development.`;
  }
  else if (normalizedTopic.includes('blockchain')) {
    return `Blockchain is a distributed digital ledger technology that records transactions across many computers so that any involved record cannot be altered retroactively without altering all subsequent blocks.

Key features of blockchain include:
- Decentralization: No single entity controls the network
- Transparency: All transactions are visible to anyone with access to the system
- Immutability: Once recorded, data cannot be altered
- Security: Cryptographic techniques secure transactions
- Consensus: Network participants agree on the validity of transactions

Originally created for Bitcoin cryptocurrency, blockchain technology has expanded to various applications:
- Cryptocurrencies (Bitcoin, Ethereum, etc.)
- Smart contracts that execute automatically when conditions are met
- Supply chain tracking and verification
- Digital identity management
- Voting systems
- Decentralized finance (DeFi) applications

While blockchain offers many advantages, it also faces challenges related to scalability, energy consumption, regulatory concerns, and integration with existing systems.`;
  }
  else {
    // Generic content for any other topic
    return `Here is information about ${topic} at ${level} level. 

${topic} is an important concept in modern technology and continues to evolve rapidly. The fundamentals include understanding its core principles, applications, and impact on various industries.

Key aspects of ${topic} include:
- Definition and basic concepts
- Historical development and evolution
- Current applications and use cases
- Future trends and potential developments
- Benefits and challenges

For ${level} learners, it's important to focus on building a solid foundation of knowledge before exploring more advanced concepts. Resources like online courses, tutorials, and hands-on projects can help deepen understanding of ${topic}.

As technology advances, staying updated with the latest developments in ${topic} will be valuable for both personal and professional growth.`;
  }
}
