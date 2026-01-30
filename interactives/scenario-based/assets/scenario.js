(function () {
  const SCORE_BY_IMPACT = { good: 2, neutral: 1, bad: 0 };

  const scenario = {
    title: 'Scenario-Based Decision Tree',
    description:
      'You lead a cross-functional health team where compliance, empathy, and rapid decision-making all matter. Choose how you would respond in each moment.',
    startId: 'start',
    nodes: {
      start: {
        id: 'start',
        title: 'Unexpected Shortcut',
        text: `A senior nurse skipped part of the pre-shift medication reconciliation to help an anxious patient sooner. Another teammate flags the shortcut as a compliance risk. What do you do first?`,
        options: [
          {
            label: 'Pause the team, acknowledge the concern, and speak privately with the nurse to understand the context.',
            impact: 'good',
            feedback:
              'You created space to gather facts before acting, which strengthens psychological safety while protecting compliance.',
            next: 'factFinding'
          },
          {
            label: 'Reprimand the nurse publicly so the team understands shortcuts are never acceptable.',
            impact: 'bad',
            feedback:
              'Public reprimands often damage trust and reduce future transparency. You still need the facts before deciding on corrective action.',
            next: 'trustDip'
          },
          {
            label: 'Log the concern for later and continue the shift so patient care is not interrupted.',
            impact: 'bad',
            feedback:
              'Delaying the issue risks repeated shortcuts and signals that compliance is optional. Moments like this call for timely leadership.',
            next: 'complianceRisk'
          }
        ]
      },
      factFinding: {
        id: 'factFinding',
        title: 'Private Debrief',
        text: `The nurse explains that the patient was experiencing escalating anxiety and there were no float nurses available. They agree the checklist is important but felt torn between empathy and policy. How do you respond?`,
        options: [
          {
            label: 'Co-design an adjusted workflow: pair the nurse with a peer for the checklist while ensuring the patient still receives rapid support.',
            impact: 'good',
            feedback:
              'Great blend of empathy and compliance. You reinforced policy, created a quick fix, and modeled collaborative problem solving.',
            next: 'coachingPath'
          },
          {
            label: 'Escalate the situation to your director immediately with a written incident summary.',
            impact: 'bad',
            feedback:
              'Escalation without a plan may feel punitive and doesn’t solve the shift-level gap. Directors expect you to stabilize the moment first.',
            next: 'complianceRisk'
          },
          {
            label: 'Schedule a refresher training for next week and remind everyone to follow the checklist today.',
            impact: 'neutral',
            feedback:
              'Training helps, but it doesn’t solve the live risk on this shift. You still need a rapid, concrete change to restore confidence.',
            next: 'trustDip'
          }
        ]
      },
      trustDip: {
        id: 'trustDip',
        title: 'Team Confidence Wavers',
        text: `The team senses tension and worries about inconsistent expectations. Morale dips and another shortcut almost happens. What is your next move?`,
        options: [
          {
            label: 'Host a quick huddle to reset expectations, explain what was learned, and invite input on keeping patients safe.',
            impact: 'good',
            feedback:
              'Resetting together rebuilds trust and transparency. You balanced accountability with inclusion.',
            next: 'coachingPath'
          },
          {
            label: 'Document the incident, email HR, and focus on hitting the shift metrics.',
            impact: 'bad',
            feedback:
              'Documentation matters, but using it as the only response avoids the leadership moment. The team still needs clarity right now.',
            next: 'complianceRisk'
          }
        ]
      },
      coachingPath: {
        id: 'coachingPath',
        title: 'Follow-Through',
        text: `The nurse agrees to partner with a peer until a staffing adjustment is made. The team asks how you will monitor progress. What is your final step?`,
        options: [
          {
            label: 'Capture the decision in a quick summary email, log a learning note, and schedule a pulse check at the next stand-up.',
            impact: 'good',
            feedback:
              'Excellent follow-through. You reinforced accountability, recorded the learning, and ensured future visibility.',
            next: 'optimalOutcome'
          },
          {
            label: 'Thank everyone and trust they will keep each other accountable without additional follow-up.',
            impact: 'neutral',
            feedback:
              'Appreciation matters, but without documented follow-up the change can fade. You risk inconsistent habits returning.',
            next: 'mixedOutcome'
          }
        ]
      },
      complianceRisk: {
        id: 'complianceRisk',
        end: true,
        outcome: 'Outcome: High Risk – Compliance Gap',
        summary:
          'Key decisions left the team uncertain and the shortcut unaddressed. Compliance gaps remained, increasing the chance of audit findings and patient risk.',
        description:
          'Sustainable compliance requires immediate coaching, collaborative fixes, and visible follow-up. Consider how you can involve the team sooner and document the agreed actions.'
      },
      mixedOutcome: {
        id: 'mixedOutcome',
        end: true,
        outcome: 'Outcome: Steady but Fragile',
        summary:
          'You created psychological safety and solved the immediate problem, but without structured follow-up the improvement may fade.',
        description:
          'Revisit the plan with written updates and checkpoints. Consistency plus clear documentation keeps both compliance and morale strong.'
      },
      optimalOutcome: {
        id: 'optimalOutcome',
        end: true,
        outcome: 'Outcome: Optimal – Reliable Workflow',
        summary:
          'Great work. You balanced empathy with policy, solved the immediate gap, documented decisions, and set a clear follow-up rhythm.',
        description:
          'The team now has a replicable playbook for similar situations. Keep celebrating transparent problem solving to reinforce the culture.'
      }
    }
  };

  const elements = {
    nodeTitle: document.getElementById('node-title'),
    nodeText: document.getElementById('node-text'),
    choiceList: document.getElementById('choice-list'),
    feedback: document.getElementById('feedback'),
    scorePill: document.getElementById('score-pill'),
    stepLabel: document.getElementById('current-step'),
    summary: document.getElementById('summary'),
    summaryOutcome: document.getElementById('summary-outcome'),
    summarySummary: document.getElementById('summary-summary'),
    summaryDescription: document.getElementById('summary-description'),
    summaryScore: document.getElementById('summary-score'),
    summarySteps: document.getElementById('summary-steps'),
    decisionLog: document.getElementById('decision-log'),
    restartBtn: document.getElementById('restart-btn'),
    card: document.getElementById('scenario-card')
  };

  const state = {
    currentId: scenario.startId,
    decisions: [],
    score: 0
  };

  function getCurrentNode() {
    return scenario.nodes[state.currentId];
  }

  function updateMeta() {
    const stepNumber = getCurrentNode()?.end ? state.decisions.length : state.decisions.length + 1;
    elements.stepLabel.textContent = `Step ${stepNumber}`;
    elements.scorePill.textContent = `Score: ${state.score}`;
  }

  function clearChoices() {
    elements.choiceList.innerHTML = '';
  }

  function showFeedback(option) {
    if (!option?.feedback) {
      elements.feedback.hidden = true;
      return;
    }
    elements.feedback.textContent = option.feedback;
    elements.feedback.dataset.impact = option.impact || 'neutral';
    elements.feedback.hidden = false;
  }

  function buildChoice(option, index) {
    const li = document.createElement('li');
    li.className = 'choices__item';

    const button = document.createElement('button');
    button.className = 'choice';
    button.type = 'button';
    button.setAttribute('data-impact', option.impact || 'neutral');
    button.setAttribute('data-index', index);
    button.innerHTML = `
      <span class="choice__label">${option.label}</span>
      <span class="choice__meta">
        <span class="choice__impact">${formatImpact(option.impact)}</span>
      </span>
    `;
    button.addEventListener('click', () => handleChoice(option));

    li.appendChild(button);
    return li;
  }

  function formatImpact(impact) {
    if (!impact) return 'Impact: neutral';
    const labels = { good: 'Positive impact', neutral: 'Balanced impact', bad: 'Risky impact' };
    return labels[impact] || `Impact: ${impact}`;
  }

  function handleChoice(option) {
    const node = getCurrentNode();
    const entry = {
      step: state.decisions.length + 1,
      nodeTitle: node.title,
      choice: option.label,
      impact: option.impact || 'neutral',
      feedback: option.feedback || ''
    };

    state.decisions.push(entry);
    state.score += SCORE_BY_IMPACT[entry.impact] ?? 0;

    showFeedback(option);

    if (!option.next || !scenario.nodes[option.next]) {
      renderSummary(scenario.nodes.mixedOutcome);
      return;
    }

    state.currentId = option.next;
    const nextNode = getCurrentNode();

    updateMeta();

    if (nextNode?.end) {
      renderSummary(nextNode);
    } else {
      renderNode();
    }
  }

  function renderNode() {
    const node = getCurrentNode();
    if (!node || node.end) {
      renderSummary(node || scenario.nodes.mixedOutcome);
      return;
    }

    elements.card.hidden = false;
    elements.summary.hidden = true;

    elements.nodeTitle.textContent = node.title;
    elements.nodeText.textContent = node.text;

    clearChoices();
    node.options.forEach((option, index) => {
      elements.choiceList.appendChild(buildChoice(option, index));
    });

    if (state.decisions.length === 0) {
      elements.feedback.hidden = true;
    }

    updateMeta();
  }

  function renderSummary(node) {
    const totalSteps = state.decisions.length;

    elements.card.hidden = true;
    elements.summary.hidden = false;
    elements.feedback.hidden = true;

    elements.summaryOutcome.textContent = node?.outcome || 'Outcome summary';
    elements.summarySummary.textContent = node?.summary || '';
    elements.summaryDescription.textContent = node?.description || '';

    elements.summaryScore.textContent = `${state.score}`;
    elements.summarySteps.textContent = `${totalSteps}`;

    elements.decisionLog.innerHTML = '';
    state.decisions.forEach(decision => {
      const item = document.createElement('li');
      item.className = 'decision-log__item';
      item.innerHTML = `
        <strong>Step ${decision.step}:</strong> ${decision.nodeTitle}<br />
        <em>${decision.choice}</em><br />
        <span>Impact: ${formatImpact(decision.impact)}</span>
      `;
      if (decision.feedback) {
        const feedback = document.createElement('p');
        feedback.textContent = decision.feedback;
        feedback.className = 'decision-log__feedback';
        item.appendChild(feedback);
      }
      elements.decisionLog.appendChild(item);
    });
  }

  function resetScenario() {
    state.currentId = scenario.startId;
    state.decisions = [];
    state.score = 0;
    elements.summary.hidden = true;
    renderNode();
  }

  elements.restartBtn.addEventListener('click', resetScenario);

  // Initialise
  renderNode();
})();
