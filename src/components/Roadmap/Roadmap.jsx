import React, { useState } from 'react';
import './Roadmap.css';

const roadmapData = [
  {
    key: 'html', title: 'HTML',
    items: [
      'Basic structure: html, head, body',
      'Headings & paragraphs: h1–h6, p',
      'Text formatting tags',
      'Links & navigation',
      'Images: img tag, alt text',
      'Lists: ul, ol, li',
      'Tables: table, tr, td, th',
      'Forms: form, input, textarea, button',
      'Semantic tags: header, footer, nav, section',
      'Div & span, id vs class'
    ]
  },
  {
    key: 'css', title: 'CSS',
    items: [
      'Selectors: element, class, id',
      'Box model: margin, border, padding',
      'Colors, backgrounds, fonts',
      'Flexbox layout',
      'CSS Grid layout',
      'Media queries (responsive design)',
      'Pseudo-classes: hover, before, after',
      'Transitions & animations'
    ]
  },
  {
    key: 'js', title: 'JavaScript',
    items: [
      'Variables: let, const',
      'Conditionals & loops',
      'Functions & arrow functions',
      'Arrays & array methods',
      'Objects & destructuring',
      'DOM manipulation',
      'Event listeners',
      'Promises, async/await, Fetch API'
    ]
  },
  {
    key: 'python', title: 'Python',
    items: [
      'Variables & data types',
      'Conditionals & loops',
      'Functions',
      'Lists, tuples, dictionaries',
      'File handling',
      'Exception handling',
      'OOP basics: classes & objects'
    ]
  },
  {
    key: 'django', title: 'Django',
    items: [
      'MVT architecture',
      'URLs & views',
      'Templates',
      'Models & Django ORM',
      'Migrations',
      'Django Admin panel',
      'User authentication',
      'Django REST Framework (APIs)'
    ]
  },
  {
    key: 'react', title: 'React',
    items: [
      'JSX & functional components',
      'Props',
      'State — useState hook',
      'Event handling',
      'Lists & keys',
      'useEffect hook',
      'React Router',
      'Calling APIs (fetch/axios)'
    ]
  },
  {
    key: 'sql', title: 'SQL',
    items: [
      'SELECT, INSERT, UPDATE, DELETE',
      'WHERE, ORDER BY, GROUP BY',
      'Joins basics',
      'Primary key & foreign key',
      'Connecting Django to MySQL'
    ]
  },
  {
    key: 'git', title: 'Git/GitHub',
    items: [
      'git init, add, commit',
      'Branches: branch, checkout, merge',
      'Pushing to GitHub: push, pull',
      'Creating a repository',
      'README files'
    ]
  }
];

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState('html');
  const [checklistState, setChecklistState] = useState(() => {
    const initialState = {};
    roadmapData.forEach(topic => {
      initialState[topic.key] = new Array(topic.items.length).fill(false);
    });
    return initialState;
  });

  const toggleItem = (topicKey, index) => {
    setChecklistState(prev => {
      const updatedTopic = [...prev[topicKey]];
      updatedTopic[index] = !updatedTopic[index];
      return { ...prev, [topicKey]: updatedTopic };
    });
  };

  const activeTopic = roadmapData.find(t => t.key === activeTab);
  const activeTopicDone = checklistState[activeTab].filter(Boolean).length;

  return (
    <section id="roadmap">
      <div className="section-title">
        <h2>Learning <span>Roadmap</span></h2>
      </div>

      <div className="roadmap-progress-list">
        {roadmapData.map(topic => {
          const total = topic.items.length;
          const done = checklistState[topic.key].filter(Boolean).length;
          const pct = Math.round((done / total) * 100);
          return (
            <div className="roadmap-progress-row" key={topic.key}>
              <div className="roadmap-progress-info">
                <span>{topic.title}</span>
                <span>{pct}%</span>
              </div>
              <div className="progress-bar">
                <div className="roadmap-fill" style={{ width: `${pct}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="roadmap-container">
        <div className="roadmap-tabs">
          {roadmapData.map(topic => (
            <div
              key={topic.key}
              className={`roadmap-tab ${activeTab === topic.key ? 'active' : ''}`}
              onClick={() => setActiveTab(topic.key)}
            >
              {topic.title}
            </div>
          ))}
        </div>

        <div className="roadmap-panel active">
          <div className="roadmap-meta">
            <span className="roadmap-topic-name">{activeTopic.title}</span>
            <span className="roadmap-count">{activeTopicDone} / {activeTopic.items.length} done</span>
          </div>

          <ul className="roadmap-checklist">
            {activeTopic.items.map((item, idx) => {
              const isDone = checklistState[activeTab][idx];
              return (
                <li key={idx} className={isDone ? 'done' : ''} onClick={() => toggleItem(activeTab, idx)}>
                  <span className="roadmap-box"></span>
                  <span className="roadmap-txt">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;